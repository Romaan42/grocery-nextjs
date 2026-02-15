import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  desc: String,
  image: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
