"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import checkLogin from "@/lib/checkUserLogin";
import Cart from "@/models/cartModel";
import Checkout from "@/models/checkout";
import User from "@/models/userModel";
import pool from "@/lib/db";

export const registerUser = async (_, formData) => {
  const { name, email, password } = formData;

  // Check if user already exists
  const existingUser = await User.getUser(email);

  if (existingUser.length !== 0) {
    return { error: "User already exists with this email." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User(name, email, hashedPassword);
  await newUser.save();
  return {
    message: "user registered",
    user: { name: newUser.name, email: newUser.email },
  };
};

export const loginUser = async (_, formData) => {
  const cookiesStore = await cookies();

  const { email, password } = formData;

  const [user] = await User.getUser(email);

  if (!user) {
    return { error: "Invalid email or password." };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Invalid email or password." };
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  cookiesStore.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
  });

  return { message: "Login successful", success: true };
};

export const addToCart = async (id) => {
  const user = await checkLogin();
  if (!user) {
    return {
      success: false,
      message: "you must be logged in to add item to cart",
    };
  }
  console.log(id);
  const [exitCartItem] = await pool.execute(
    "SELECT * FROM cart WHERE product_id=?",
    [id],
  );
  if (exitCartItem.length !== 0) {
    return { success: false, message: "item already added in cart" };
  }

  await pool.execute("INSERT INTO cart(product_id) VALUES(?)", [id]);

  return { success: true, message: "cartitem added successfully" };
};

export const removeFromCart = async (id) => {
  const user = await checkLogin();
  if (!user) {
    return { message: "user are not logged in" };
  }

  await pool.execute("DELETE FROM cart WHERE cart_id=?", [id]);
  return { message: "items deleted" };
};

export const increaseQty = async (id) => {
  await connectDb();
  await Cart.findByIdAndUpdate(id, { $inc: { quantity: 1 } });
  return { success: true };
};
export const decreaseQty = async (id) => {
  await connectDb();
  await Cart.findByIdAndUpdate(id, { $inc: { quantity: -1 } });
  return { success: true };
};

export const logoutUser = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("token");

  return { success: true, message: "logout successfully" };
};

export const placeOrder = async (_, data) => {
  await connectDb();
  const user = await checkLogin();
  if (!user) {
    return { success: false, message: "you must be logged in to place order" };
  }

  const checkout = await Checkout.create({
    userId: user._id,
    name: data.name,
    address: data.address,
    number: data.phone,
    items: data.items,
    totalPrice: data.totalPrice,
  });

  await Cart.deleteMany({ userId: user._id });
  return {
    success: true,
    message: "order placed successfully",
    id: checkout._id.toString(),
  };
};
