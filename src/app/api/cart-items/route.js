import checkLogin from "@/lib/checkUserLogin";
import connectDb from "@/lib/db";
import Cart from "@/models/cartModel";
import Product from "@/models/productModel";

export const GET = async () => {
  await connectDb();
  try {
    const user = await checkLogin();
    if (!user) {
      return Response.json(
        { success: false, message: "please login first" },
        { status: 404 },
      );
    }

    const products = await Product.find();
    const addedCartItems = await Cart.find({ userId: user._id });

    const cartItems = addedCartItems.map((cart) => {
      const findedProduct = products.find(
        (product) => product._id.toString() === cart.productId.toString(),
      );

      return { ...findedProduct.toObject(), qty: cart.quantity, id: cart._id };
    });

    return Response.json({ success: true, cartItems });
  } catch (error) {
    return Response.json({ success: false });
  }
};
