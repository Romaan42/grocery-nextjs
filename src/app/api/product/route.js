import uploadOnCloud from "@/lib/cloudinary";
import connectDb from "@/lib/db";
import Product from "@/models/productModel";

export const POST = async (request) => {
  await connectDb();

  const formData = await request.formData();

  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const category = formData.get("category");
  const desc = formData.get("description");
  const image = formData.get("image");

  const imageUrl = await uploadOnCloud(image);
  if (!imageUrl) {
    return Response.json(
      {
        error: "image uploaded failed",
      },
      {
        status: 401,
      },
    );
  }

  const product = await Product.create({
    title,
    price,
    category,
    desc,
    image: imageUrl,
  });

  return Response.json({
    success: true,
    message: "product added successfully",
    product,
  });
};

export const GET = async () => {
  try {
    await connectDb();
    const products = await Product.find();
    return Response.json({ success: true, data: products });
  } catch (error) {
    return Response.json(
      { success: false, message: "server error" },
      {
        status: 500,
      },
    );
  }
};
