import { cookies } from "next/headers";
import connectDb from "./db";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

const checkLogin = async () => {
  await connectDb();
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) {
    return null;
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return null;
  }

  const user = await User.findById(decoded.userId);
  if (!user) {
    return null;
  }
  return user;
};

export default checkLogin;
