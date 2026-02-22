import checkAdminLogin from "@/lib/checkAdminLogin";
import connectDb from "@/lib/db";
import Checkout from "@/models/checkout";

export async function GET() {
  try {
    await connectDb();
    const isAdmin = await checkAdminLogin();
    if (!isAdmin) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }
    const orders = await Checkout.find().sort({ createdAt: -1 });
    return Response.json({ success: true, orders });
  } catch (error) {
    return Response.json(
      { message: "Error fetching orders", error },
      { status: 500 },
    );
  }
}
