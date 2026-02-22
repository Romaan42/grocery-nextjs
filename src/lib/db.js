import mongoose from "mongoose";

const URL = process.env.MONGODB_URL;

if (!URL) {
  throw new Error("MONGODB_URL environment variable is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }

  cached.promise = cached.promise || mongoose.connect(URL);
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDb;
