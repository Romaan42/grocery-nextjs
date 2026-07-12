import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

const checkLogin = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) {
    return null;
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  if (!decode) {
    return null;
  }

  const [user] = await User.getUser(decode.email);
  if (!user) {
    return null;
  }

  return user;
};

export default checkLogin;
