import checkLogin from "@/lib/checkUserLogin";
import { NextResponse } from "next/server";
import checkAdminLogin from "./lib/checkAdminLogin";

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const user = await checkLogin();
  const admin = await checkAdminLogin();
  if (pathname === "/cart" && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    !admin &&
    (pathname === "/admin" ||
      pathname === "/admin/add-product" ||
      pathname === "/admin/products" ||
      pathname === "/admin/orders")
  ) {
    return NextResponse.redirect(new URL("/admin/i-am-admin", request.url));
  }

  if (admin && pathname === "/admin/i-am-admin") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart",
    "/checkout",
    "/orders",
    "/admin",
    "/admin-login",
    "/admin/add-product",
    "/admin/products",
    "/admin/i-am-admin",
    "/admin/orders",
  ],
};
