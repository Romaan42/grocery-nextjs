import pool from "@/lib/db";

class Product {
  constructor(title, price, category, desc, image) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.desc = desc;
    this.image = image;
  }

  async save() {
    const result = await pool.execute(
      "INSERT INTO products(title,price,category,description,image) VALUES (?,?,?,?,?)",
      [this.title, this.price, this.category, this.desc, this.image],
    );

    return result;
  }

  static async fetchAll() {
    const [products] = await pool.execute("SELECT * FROM products");
    return products;
  }
}

export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   category: String,
//   desc: String,
//   image: String,
// });

// const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);
// export default Product;
