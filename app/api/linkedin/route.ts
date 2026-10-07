import { NextResponse } from "next/server";
import { fetchLinkedInPosts } from "@/lib/linkedin";

export const revalidate = 3600;

export async function GET() {
  try {
    const { posts, source } = await fetchLinkedInPosts();

    return NextResponse.json(
      {
        success: true,
        source,
        timestamp: new Date().toISOString(),
        count: posts.length,
        posts,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in /api/linkedin route:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
