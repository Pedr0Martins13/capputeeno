import { NextRequest, NextResponse } from "next/server";
import { isSessionValid } from "./actions/service/jwt";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|.*\\.png$).*)",
};

const publicRoutes = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const session = await isSessionValid();
  if (publicRoutes.includes(pathName) && !session) {
    return NextResponse.next();
  }
  if (session && publicRoutes.includes(pathName)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
