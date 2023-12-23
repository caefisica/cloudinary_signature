import request from "supertest"
import { app, server } from "../server"

// Mocking Cloudinary
jest.mock("cloudinary", () => ({
  v2: {
    config: jest.fn().mockReturnValue({
      api_secret: "test_secret",
    }),
    utils: {
      api_sign_request: jest.fn().mockReturnValue("mocked_signature"),
    },
  },
}))

describe("POST /api/sign", () => {
  it("should return a signature and timestamp on valid request", async () => {
    const response = await request(app)
      .post("/api/sign")
      .send({ folder: "test_folder" })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("signature", "mocked_signature")
    expect(response.body).toHaveProperty("timestamp")
  })
})

afterAll((done) => {
  server.close(done)
})
