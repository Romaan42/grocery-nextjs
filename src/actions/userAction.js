"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectDb from "@/lib/db";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import checkLogin from "@/lib/checkUserLogin";
import Cart from "@/models/cartModel";
import Checkout from "@/models/checkout";

export const registerUser = async (_, formData) => {
  await connectDb();
  const { name, email, password } = formData;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "User already exists with this email." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  return {
    message: "user registered",
    user: { name: newUser.name, email: newUser.email },
  };
};

export const loginUser = async (_, formData) => {
  await connectDb();

  const cookiesStore = await cookies();

  const { email, password } = formData;

  const user = await User.findOne({ email });

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
  await connectDb();
  const user = await checkLogin();
  if (!user) {
    return {
      success: false,
      message: "you must be logged in to add item to cart",
    };
  }

  const exitCartItem = await Cart.findOne({ productId: id, userId: user._id });
  if (exitCartItem) {
    return { success: false, message: "item already added in cart" };
  }

  await Cart.create({ productId: id, userId: user._id });

  return { success: true, message: "cartitem added successfully" };
};

export const removeFromCart = async (id) => {
  await connectDb();
  const user = await checkLogin();
  if (user instanceof Response) {
    return user;
  }

  await Cart.findByIdAndDelete(id);
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
  await connectDb();
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
