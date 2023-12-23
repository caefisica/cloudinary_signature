import { v2 as cloudinary } from "cloudinary"

export const generateSignature = (timestamp: number, folderName: string) => {
  const apiSecret = cloudinary.config().api_secret
  if (typeof apiSecret !== "string") {
    throw new Error("Cloudinary API secret is not set or not a string.")
  }

  const paramsToSign = {
    timestamp,
    folder: folderName,
  }

  return cloudinary.utils.api_sign_request(paramsToSign, apiSecret)
}
