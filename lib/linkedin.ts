import fallbackPosts from "@/data/linkedin-posts.json";

export interface LinkedInDispatch {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
  publishedDate: string;
  linkedInUrl: string;
  isLive?: boolean;
}

/**
 * Normalizes text and extracts hashtags
 */
function extractTags(text: string): string[] {
  const matches = text.match(/#\w+/g);
  return matches && matches.length > 0
    ? matches.slice(0, 4)
    : ["#SystemDesign", "#Fintech", "#DistributedSystems"];
}

/**
 * Generates an estimated read time from body length
 */
function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(2, Math.ceil(words / 150));
  return `${minutes} min read`;
}

/**
 * Fetches LinkedIn posts either via:
 * 1. Custom Feed / RSS / Webhook URL (LINKEDIN_FEED_URL)
 * 2. Official LinkedIn REST API (LINKEDIN_ACCESS_TOKEN & LINKEDIN_PERSON_URN)
 * 3. Fallback to verified local RFC archive if unconfigured or rate-limited
 */
export async function fetchLinkedInPosts(): Promise<{ posts: LinkedInDispatch[]; source: "live_api" | "feed" | "fallback" }> {
  // Option 1: Custom live feed proxy / Webhook (e.g. RSS feed, RapidAPI, n8n webhook, or headless service)
  const feedUrl = process.env.LINKEDIN_FEED_URL;
  if (feedUrl) {
    try {
      const res = await fetch(feedUrl, {
        next: { revalidate: 3600 },
        headers: { "User-Agent": "RetroFintechPortfolio/1.0" },
      });

      if (res.ok) {
        const data = await res.json();
        // If data is array of items
        const rawItems = Array.isArray(data) ? data : data.items || data.posts;
        if (Array.isArray(rawItems) && rawItems.length > 0) {
          const mapped: LinkedInDispatch[] = rawItems.slice(0, 6).map((item, idx) => {
            const text = item.text || item.content || item.summary || item.title || "";
            const title =
              item.title ||
              (text.split("\n")[0] || "Engineering System Dispatch").slice(0, 90);
            return {
              id: item.id || `live-li-${idx + 1}`,
              title,
              summary: item.summary || text.slice(0, 240) + "...",
              tags: item.tags || extractTags(text),
              readTime: item.readTime || estimateReadTime(text),
              publishedDate: item.publishedDate || item.date || new Date().toISOString().split("T")[0],
              linkedInUrl: item.url || item.link || "https://www.linkedin.com/in/anujtiwari2001/",
              isLive: true,
            };
          });

          return { posts: mapped, source: "feed" };
        }
      }
    } catch (err) {
      console.warn("Failed to fetch from LINKEDIN_FEED_URL:", err);
    }
  }

  // Option 2: Official LinkedIn REST API (requires OAuth user token)
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const personUrn = process.env.LINKEDIN_PERSON_URN; // e.g. "urn:li:person:abcdef123"

  if (token && personUrn) {
    try {
      const res = await fetch(
        `https://api.linkedin.com/rest/posts?author=${encodeURIComponent(personUrn)}&q=author&count=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "LinkedIn-Version": "202401",
            "X-Restli-Protocol-Version": "2.0.0",
          },
          next: { revalidate: 3600 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (data.elements && Array.isArray(data.elements) && data.elements.length > 0) {
          const mapped: LinkedInDispatch[] = data.elements.map(
            (el: { id: string; commentary?: string; createdAt?: number }, idx: number) => {
              const commentary = el.commentary || "";
              const lines = commentary.split("\n").filter((l) => l.trim().length > 0);
              const title = lines[0] || `System Dispatch: Engineering Memo #${idx + 1}`;
              const summary = lines.slice(1).join(" ") || commentary.slice(0, 200) + "...";

              const dateStr = el.createdAt
                ? new Date(el.createdAt).toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0];

              return {
                id: el.id ? el.id.replace("urn:li:share:", "li-") : `li-${idx + 1}`,
                title: title.slice(0, 100),
                summary: summary.slice(0, 240) + "...",
                tags: extractTags(commentary),
                readTime: estimateReadTime(commentary),
                publishedDate: dateStr,
                linkedInUrl: `https://www.linkedin.com/feed/update/${el.id}`,
                isLive: true,
              };
            }
          );

          return { posts: mapped, source: "live_api" };
        }
      } else {
        console.warn(`LinkedIn API responded with status ${res.status}`);
      }
    } catch (err) {
      console.warn("Error calling LinkedIn official API:", err);
    }
  }

  // Option 3: Fallback to high-quality curated technical dispatches
  return {
    posts: fallbackPosts as LinkedInDispatch[],
    source: "fallback",
  };
}
