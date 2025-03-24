// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_PATHS, ROLE_ROUTES } from "./constants/appConstants";
import { USER_TYPE } from "./constants/userConstants";
import appConfig from "./constants/config";

const { AUTH_TOKEN_KEY, USER_TYPE_KEY } = appConfig;

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

  // Add debug information
  console.log("Middleware running on path:", path);
  
  // Get the auth token from the request cookies
  const authToken = request.cookies.get(AUTH_TOKEN_KEY)?.value;
  console.log("Auth token found:", !!authToken);
  
  const userTypeFromCookie = request.cookies.get(USER_TYPE_KEY)?.value;
  console.log("User type from cookie:", userTypeFromCookie);
  
  // If no authentication and not on login page, redirect to login
  if (!authToken) {
    console.log("No auth token, redirecting to login");
    return NextResponse.redirect(new URL("/visaistic", request.url));
  }

  const userType = userTypeFromCookie ? Number(userTypeFromCookie) as USER_TYPE : USER_TYPE.CLIENT; 
  console.log("Using user type:", userType);


  if ((path === "/" || path === "/visaistic") && authToken && userType) {
    console.log("Accessing root path, redirecting to default path");
    return NextResponse.redirect(new URL(DEFAULT_PATHS[userType], request.url));
 
  }

  // Check if the user has access to the requested path
  const hasAccess = ROLE_ROUTES[userType].some((route: string) => path.startsWith(route));
  console.log("User has access to path:", hasAccess);
  
  if (!hasAccess) {
    // Redirect to the default path for their role if they don't have access
    console.log("User doesn't have access, redirecting to default path");
    return NextResponse.redirect(new URL(DEFAULT_PATHS[userType], request.url));
  }

  // Allow the request to proceed
  console.log("Access granted, proceeding");
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
