import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { generateSignature } from "./utils"
import configureCloudinary from "./config"

dotenv.config()
configureCloudinary()

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/sign", async (req: Request, res: Response) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000)
    const folderName: string = req.body.folder
    const signature = generateSignature(timestamp, folderName)

    res.status(200).json({ signature, timestamp })
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ error: "Error interno en el servidor" })
  }
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(`El servidor se está ejecutando en el puerto ${PORT}`),
)

export { app, server }
