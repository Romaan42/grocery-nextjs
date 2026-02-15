import checkAdminLogin from "@/lib/checkAdminLogin";

export const GET = async () => {
  const admin = await checkAdminLogin();
  if (admin instanceof Response) {
    return admin;
  }
  return Response.json({ login: true, message: "Welcome Roman Khan" });
};
