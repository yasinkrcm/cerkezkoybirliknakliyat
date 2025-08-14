import connectDB from "../../../lib/mongodb"
import User from "../../../models/User"
import { generateToken, setAuthCookie } from "../../../utils/auth"
import { successResponse, errorResponse, validationErrorResponse } from "../../../utils/response"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json(errorResponse("Method not allowed", "METHOD_NOT_ALLOWED"))
  }

  try {
    await connectDB()

    const { name, email, password, phone, role = "customer" } = req.body

    // Validation
    if (!name || !email || !password || !phone) {
      return res.status(400).json(
        validationErrorResponse({
          name: !name ? "İsim gereklidir" : null,
          email: !email ? "E-posta gereklidir" : null,
          password: !password ? "Şifre gereklidir" : null,
          phone: !phone ? "Telefon numarası gereklidir" : null,
        }),
      )
    }

    if (password.length < 6) {
      return res.status(400).json(
        validationErrorResponse({
          password: "Şifre en az 6 karakter olmalıdır",
        }),
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return res.status(400).json(errorResponse("Bu e-posta adresi zaten kullanılıyor", "EMAIL_EXISTS"))
    }

    // Create user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
      phone: phone.trim(),
      role: role === "admin" ? "customer" : role, // Prevent admin registration via API
    })

    await user.save()

    // Generate token
    const token = generateToken({
      userId: user._id,
      email: user.email,
      role: user.role,
    })

    // Set cookie
    setAuthCookie(res, token)

    res.status(201).json(
      successResponse(
        {
          user: user.toJSON(),
          token,
        },
        "Kayıt başarılı",
      ),
    )
  } catch (error) {
    console.error("Register error:", error)

    if (error.name === "ValidationError") {
      const errors = {}
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })
      return res.status(400).json(validationErrorResponse(errors))
    }

    res.status(500).json(errorResponse("Sunucu hatası", "SERVER_ERROR"))
  }
}
