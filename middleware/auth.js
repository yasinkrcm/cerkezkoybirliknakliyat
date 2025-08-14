import { verifyToken } from "../utils/auth"
import { unauthorizedResponse, errorResponse } from "../utils/response"

export function requireAuth(handler) {
  return async (req, res) => {
    try {
      // Get token from cookie
      const token = req.cookies["auth-token"]
      if (!token) {
        return res.status(401).json(unauthorizedResponse("Giriş yapmanız gerekiyor"))
      }

      // Verify token
      const decoded = verifyToken(token)
      if (!decoded) {
        return res.status(401).json(unauthorizedResponse("Geçersiz token"))
      }

      // Add user info to request
      req.user = decoded

      return handler(req, res)
    } catch (error) {
      console.error("Auth middleware error:", error)
      return res.status(500).json(errorResponse("Sunucu hatası", "SERVER_ERROR"))
    }
  }
}

export function requireRole(roles) {
  return (handler) =>
    requireAuth(async (req, res) => {
      const userRole = req.user.role

      if (!roles.includes(userRole)) {
        return res.status(403).json(unauthorizedResponse("Bu işlem için yetkiniz yok"))
      }

      return handler(req, res)
    })
}

export function requireAdmin(handler) {
  return requireRole(["admin"])(handler)
}

export function requireAdminOrDriver(handler) {
  return requireRole(["admin", "driver"])(handler)
}
