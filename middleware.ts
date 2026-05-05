import { NextRequest } from "next/server";
import { mrstranMiddleware } from "@/middleware/mrstran-middleware";

export function middleware(request: NextRequest) {
  return mrstranMiddleware(request);
}
