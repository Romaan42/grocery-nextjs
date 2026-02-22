import connectDb from "@/lib/db";
import Product from "@/models/productModel";

export const GET = async () => {
  await connectDb();
  const products = await Product.find();
  if (!products) {
    return Response.json({ message: "No products found" }, { status: 404 });
  }

  return Response.json({ products }, { status: 200 });
};
