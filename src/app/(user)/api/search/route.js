import Product from "@/models/productModel";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  try {
    const products = await Product.find({
      title: { $regex: query.toLowerCase(), $options: "i" },
    });
    return Response.json({ success: true, products });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
};
