import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "İsim gereklidir"],
      trim: true,
      maxlength: [50, "İsim 50 karakterden uzun olamaz"],
    },
    email: {
      type: String,
      required: [true, "E-posta gereklidir"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Geçerli bir e-posta adresi giriniz"],
    },
    password: {
      type: String,
      required: [true, "Şifre gereklidir"],
      minlength: [6, "Şifre en az 6 karakter olmalıdır"],
    },
    phone: {
      type: String,
      required: [true, "Telefon numarası gereklidir"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin", "driver"],
      default: "customer",
    },
    address: {
      street: String,
      city: String,
      district: String,
      postalCode: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

// Şifre hashleme middleware
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  try {
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

// Şifre karşılaştırma metodu
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

// JSON'a dönüştürürken şifreyi gizle
UserSchema.methods.toJSON = function () {
  const userObject = this.toObject()
  delete userObject.password
  return userObject
}

export default mongoose.models.User || mongoose.model("User", UserSchema)
