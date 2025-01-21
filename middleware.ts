import { createNextMiddleware } from "gt-next/middleware";

export default createNextMiddleware({
  defaultLocale: "en-US",
  locales: ["en-US", "fr", "es", "de", "ja", "zh"],
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (internal files)
     * - static files
     */
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};
