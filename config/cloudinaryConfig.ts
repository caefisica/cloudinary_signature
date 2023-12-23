import { v2 as cloudinary } from "cloudinary";

const configureCloudinary = () => {
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET) {
    throw new Error("La configuración de Cloudinary (keys y secretos) no está definida.");
  }

  const config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
  };

  cloudinary.config(config);
  return cloudinary;
};

export default configureCloudinary;
