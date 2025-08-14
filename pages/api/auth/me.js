import connectDB from "../../../lib/mongodb"
import User from "../../../models/User"
import { verifyToken } from "../../../utils/auth"
import { successResponse, errorResponse, unauthorizedResponse } from "../../../utils/response"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json(errorResponse("Method not allowed", "METHOD_NOT_ALLOWED"))
  }

  try {
    await connectDB()

    // Get token from cookie
    const token = req.cookies["auth-token"]
    if (!token) {
      return res.status(401).json(unauthorizedResponse("Token bulunamadı"))
    }

    // Verify token
    const decoded = verifyToken(token)
    if (!decoded) {
      return res.status(401).json(unauthorizedResponse("Geçersiz token"))
    }

    // Find user
    const user = await User.findById(decoded.userId)
    if (!user || !user.isActive) {
      return res.status(401).json(unauthorizedResponse("Kullanıcı bulunamadı"))
    }

    res.status(200).json(
      successResponse({
        user: user.toJSON(),
      }),
    )
  } catch (error) {
    console.error("Me error:", error)
    res.status(500).json(errorResponse("Sunucu hatası", "SERVER_ERROR"))
  }
}
