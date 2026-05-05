import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mrstranMiddleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  const isSubdomain = hostname.startsWith("mrstran.");

  if (isSubdomain) {
    const allowedPath = "/landing";

    if (url.pathname === "/") {
      url.pathname = allowedPath;
      return NextResponse.redirect(url);
    }

    if (url.pathname !== allowedPath) {
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  return NextResponse.next();
}
