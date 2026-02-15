import mongoose from "mongoose";

const checkoutSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    name: String,
    address: String,
    number: String,
    items: [],
    totalPrice: Number,
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);

const Checkout =
  mongoose.models.Checkout || mongoose.model("Checkout", checkoutSchema);
export default Checkout;
