import { NextRequest, NextResponse } from "next/server";
import { fetchTopGitHubRepos } from "@/lib/github";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username =
      searchParams.get("username") ||
      process.env.GITHUB_USERNAME ||
      "anujtiwari";
    const repos = await fetchTopGitHubRepos(username);

    return NextResponse.json(
      {
        success: true,
        username,
        timestamp: new Date().toISOString(),
        repos,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      typeof (error as { digest: unknown }).digest === "string"
    ) {
      throw error;
    }
    console.error("Error in /api/github route:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
