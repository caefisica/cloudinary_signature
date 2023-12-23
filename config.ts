import { v2 as cloudinary } from "cloudinary"

const configureCloudinary = () => {
  const requiredConfig = [
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_SECRET",
    "CLOUDINARY_CLOUD_NAME",
  ]
  for (const configKey of requiredConfig) {
    if (!process.env[configKey]) {
      throw new Error(`Missing Cloudinary configuration: ${configKey}`)
    }
  }

  const config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
  }

  cloudinary.config(config)
  return cloudinary
}

export default configureCloudinary
