import checkLogin from "@/lib/checkUserLogin";

export const GET = async () => {
  const user = await checkLogin();
  if (!user) {
    return Response.json({ login: false, message: "user not logged in" });
  }

  return Response.json({ login: true, user });
};
