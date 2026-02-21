import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloud = async (file) => {
  if (!file) return null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "grocery",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url); // ✅ string return
          },
        )
        .end(buffer);
    });
  } catch (error) {
    return null;
  }
};

export default uploadOnCloud;
