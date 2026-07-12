import checkLogin from "@/lib/checkUserLogin";
import pool from "@/lib/db";
import Product from "@/models/productModel";

export const GET = async () => {
  try {
    // const user = await checkLogin();
    // if (!user) {
    //   return Response.json(
    //     { success: false, message: "please login first" },
    //     { status: 404 },
    //   );
    // }

    const [cartItems] = await pool.execute(
      "SELECT * FROM products INNER JOIN cart ON products.id = cart.product_id",
    );

    return Response.json({ success: true, cartItems });
  } catch (error) {
    return Response.json({ success: false });
  }
};
