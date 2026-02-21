import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
