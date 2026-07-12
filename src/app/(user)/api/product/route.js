import Product from "@/models/productModel";
import uploadOnCloud from "@/lib/cloudinary";

export const POST = async (request) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const category = formData.get("category");
  const desc = formData.get("description");
  const image = formData.get("image");

  // const imageUrl = await uploadOnCloud(image);
  // if (!imageUrl) {
  //   return Response.json(
  //     {
  //       error: "image uploaded failed",
  //     },
  //     {
  //       status: 401,
  //     },
  //   );
  // }

  // const product = await Product.create({
  //   title,
  //   price,
  //   category,
  //   desc,
  //   image: imageUrl,
  // });

  return Response.json({
    success: true,
    message: "product added successfully",
  });
};

export const GET = async () => {
  try {
    const products = await Product.fetchAll();
    console.log(products);
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
