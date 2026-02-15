import checkLogin from "@/lib/checkUserLogin";
import connectDb from "@/lib/db";
import Checkout from "@/models/checkout";

export async function GET() {
  try {
    await connectDb();
    const user = await checkLogin();
    if (!user) {
      return Response.json(
        { success: false, message: "please login first!" },
        { status: 401 },
      );
    }
    const ordersData = await Checkout.find({ userId: user._id });

    return Response.json({ success: true, ordersData });
  } catch (error) {
    return Response.json({ success: false, message: "server error", error });
  }
}
