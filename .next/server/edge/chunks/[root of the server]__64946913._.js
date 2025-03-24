(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__64946913._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/constants/appConstants.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// Define user roles
__turbopack_context__.s({
    "DEFAULT_PATHS": (()=>DEFAULT_PATHS),
    "ROLE_ROUTES": (()=>ROLE_ROUTES),
    "defaultRoutes": (()=>defaultRoutes),
    "roleBasedNavItems": (()=>roleBasedNavItems)
});
const DEFAULT_PATHS = {
    client: "/visaistic/application-tracker",
    manager: "/visaistic/application-tracker",
    admin: "/visaistic/manage-users"
};
const ROLE_ROUTES = {
    client: [
        "/application-tracker",
        "/check-list",
        "/services",
        "/manage-users",
        "/manage-clients",
        "/checklist-details"
    ],
    manager: [
        "/application-tracker",
        "/check-list",
        "/services",
        "/manage-users",
        "/manage-clients",
        "/checklist-details"
    ],
    admin: [
        "/application-tracker",
        "/check-list",
        "/services",
        "/manage-users",
        "/manage-clients",
        "/checklist-details"
    ]
};
const roleBasedNavItems = {
    client: [
        {
            label: "Application Tracker",
            path: "/application-tracker"
        },
        {
            label: "Manage Users",
            path: "/manage-users"
        },
        {
            label: "Check list",
            path: "/check-list"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Manage Clients",
            path: "/manage-clients"
        }
    ],
    manager: [
        {
            label: "Application Tracker",
            path: "/application-tracker"
        },
        {
            label: "Manage Users",
            path: "/manage-users"
        },
        {
            label: "Check list",
            path: "/check-list"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Manage Clients",
            path: "/manage-clients"
        }
    ],
    admin: [
        {
            label: "Application Tracker",
            path: "/application-tracker"
        },
        {
            label: "Manage Users",
            path: "/manage-users"
        },
        {
            label: "Check list",
            path: "/check-list"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Manage Clients",
            path: "/manage-clients"
        }
    ]
};
const defaultRoutes = {
    client: "/visaistic/application-tracker",
    manager: "/visaistic/application-tracker",
    admin: "/visaistic/manage-users"
};
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// middleware.ts
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/appConstants.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    // Get the pathname from the URL
    const path = request.nextUrl.pathname;
    // Skip middleware for API routes and public assets
    if (path.startsWith("/api") || path.startsWith("/_next") || path.startsWith("/images")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Get the auth token from the request cookies or headers
    //   const authToken =
    //     request.cookies.get("auth_token")?.value ||
    //     request.headers.get("authorization");
    //update role to check
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    // If no authentication, redirect to login
    if (!authToken && path !== "/visaistic") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/visaistic", request.url));
    }
    // For this example, we'll determine role from the token
    // In production, you'd decode the JWT or session token properly
    let role;
    if (authToken) {
        role = authToken.includes("admin") ? "admin" : authToken.includes("manager") ? "manager" : "client";
    }
    // Root path should redirect to the default page for the role
    if (path === "/" || path === "/visaistic" && role) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_PATHS"][role], request.url));
    }
    // Check if the user has access to the requested path
    if (role && !__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROLE_ROUTES"][role].some((route)=>path.startsWith(route))) {
        // Redirect to the default path for their role if they don't have access
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_PATHS"][role], request.url));
    }
    // Allow the request to proceed
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /images (static files)
     * 4. /.well-known (security-related files)
     * 5. favicon.ico, robots.txt, sitemap.xml
     */ "/((?!api|_next|images|.well-known|favicon.ico|robots.txt|sitemap.xml).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__64946913._.js.map