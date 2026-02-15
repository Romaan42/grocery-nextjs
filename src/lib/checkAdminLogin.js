import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const checkAdminLogin = async () => {
  const cookiesStore = await cookies();
  const adminToken = cookiesStore.get("adminToken")?.value;
  if (!adminToken) {
    return null;
  }
  const { email, password } = jwt.verify(adminToken, process.env.JWT_SECRET);
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return null;
  }

  return { email, password };
};

export default checkAdminLogin;
