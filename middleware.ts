// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_PATHS, ROLE_ROUTES } from "./constants/appConstants";
import { USER_TYPE } from "./constants/userConstants";
import config2 from "./constants/config";

const { AUTH_TOKEN_KEY, USER_TYPE_KEY } = config2;

export async function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname;

  // Skip middleware for API routes and public assets
  if (
    path.startsWith("/api") ||
    path.startsWith("/_next") ||
    path.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Get the auth token from the request cookies or headers
  //   const authToken =
  //     request.cookies.get("auth_token")?.value ||
  //     request.headers.get("authorization");

  //update role to check
  const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
  const userType = Number(localStorage.getItem(USER_TYPE_KEY)) as USER_TYPE;

  // If no authentication, redirect to login
  if (!authToken && path !== "/visaistic") {
    return NextResponse.redirect(new URL("/visaistic", request.url));
  }

  // Root path should redirect to the default page for the role
  if (path === "/" || path === "/visaistic" ) {
    return NextResponse.redirect(new URL(DEFAULT_PATHS[userType], request.url));
  }

  // Check if the user has access to the requested path
  if (!ROLE_ROUTES[userType].some((route: string) => path.startsWith(route))) {
    // Redirect to the default path for their role if they don't have access
    return NextResponse.redirect(new URL(DEFAULT_PATHS[userType], request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /images (static files)
     * 4. /.well-known (security-related files)
     * 5. favicon.ico, robots.txt, sitemap.xml
     */
    "/((?!api|_next|images|.well-known|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
