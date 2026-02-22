"use server";
import checkAdminLogin from "@/lib/checkAdminLogin";
import Product from "@/models/productModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const adminLogin = async (data) => {
  const cookiesStore = await cookies();
  const { email, password } = data;
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return { login: false, message: "invalid creadentials! " };
  }

  const adminToken = jwt.sign({ email, password }, process.env.JWT_SECRET);
  cookiesStore.set("adminToken", adminToken);
  return { login: true, admin: data.email };
};

export const adminLogout = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("adminToken");
  return { logout: true };
};

export const checkAdmin = async () => {
  const admin = await checkAdminLogin();

  if (!admin) {
    return { admin: false };
  }

  return { admin: true, email: admin.email };
};
