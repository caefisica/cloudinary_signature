import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { generateSignature } from "./utils"
import configureCloudinary from "./config"

dotenv.config()

if (!process.env.PORT || !process.env.CLOUDINARY_CLOUD_NAME) {
  console.error("Required environment variables are missing.")
  process.exit(1)
}

configureCloudinary()

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/sign", async (req: Request, res: Response) => {
  const folderName: string = req.body.folder
  if (!folderName) {
    return res.status(400).json({ error: "Folder name is required" })
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000)
    const signature = generateSignature(timestamp, folderName)

    res.status(200).json({ signature, timestamp })
  } catch (error) {
    console.error("Error during signature generation:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`),
)

export { app, server }
