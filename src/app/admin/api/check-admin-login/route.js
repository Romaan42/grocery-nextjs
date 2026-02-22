import checkAdminLogin from "@/lib/checkAdminLogin";

export const GET = async () => {
  const admin = await checkAdminLogin();
  if (!admin) {
    return Response.json({ login: false, message: "Admin not logged in" });
  }
  return Response.json({ login: true, message: "Welcome Roman Khan" });
};
