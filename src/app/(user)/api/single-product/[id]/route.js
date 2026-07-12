import connectDb from "@/lib/db";
import Product from "@/models/productModel";

export const GET = async (_, { params }) => {
  const { id } = await params;
  try {
    await connectDb();
    const product = await Product.findById(id);
    if (!product) {
      return Response.json({ error: "product not found! " });
    }
    return Response.json({ error: false, product });
  } catch (error) {
    return Response.json({ error: "something went wrong" }, { status: 404 });
  }
};
