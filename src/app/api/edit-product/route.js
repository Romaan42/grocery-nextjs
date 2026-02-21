import uploadOnCloud from "@/lib/cloudinary";
import connectDb from "@/lib/db";
import Product from "@/models/productModel";

export const POST = async (request) => {
  await connectDb();

  const formData = await request.formData();
  const id = formData.get("id");
  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const category = formData.get("category");
  const desc = formData.get("description");
  const image = formData.get("image");

  let imageUrl = null;
  if (image) {
    const result = await uploadOnCloud(image);
    if (!result) {
      return Response.json(
        {
          error: "image uploaded failed",
        },
        {
          status: 401,
        },
      );
    } else {
      imageUrl = result;
    }
  }

  const updateProductData = {
    title,
    price,
    category,
    desc,
  };

  if (imageUrl) {
    updateProductData.image = imageUrl;
  }

  const product = await Product.findByIdAndUpdate(id, updateProductData);

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
