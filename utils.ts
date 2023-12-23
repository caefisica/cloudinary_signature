import { v2 as cloudinary } from "cloudinary"

let cachedApiSecret: string | undefined

export const generateSignature = (timestamp: number, folderName: string) => {
  if (!cachedApiSecret) {
    cachedApiSecret = cloudinary.config().api_secret
    if (typeof cachedApiSecret !== "string") {
      throw new Error("Cloudinary API secret is not set or not a string.")
    }
  }

  const paramsToSign = {
    timestamp,
    folder: folderName,
  }

  return cloudinary.utils.api_sign_request(paramsToSign, cachedApiSecret)
}
