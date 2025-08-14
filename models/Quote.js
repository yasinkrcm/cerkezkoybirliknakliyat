import mongoose from "mongoose"

const QuoteSchema = new mongoose.Schema(
  {
    quoteNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    customerInfo: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    origin: {
      city: { type: String, required: true },
      district: { type: String, required: true },
      address: String,
    },
    destination: {
      city: { type: String, required: true },
      district: { type: String, required: true },
      address: String,
    },
    items: [
      {
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
        description: String,
      },
    ],
    serviceType: {
      type: String,
      enum: ["standard", "express", "premium"],
      default: "standard",
    },
    additionalServices: [
      {
        name: String,
        selected: Boolean,
      },
    ],
    estimatedPrice: {
      basePrice: Number,
      additionalServicesPrice: Number,
      totalPrice: Number,
    },
    status: {
      type: String,
      enum: ["pending", "calculated", "sent", "accepted", "rejected", "expired"],
      default: "pending",
    },
    validUntil: {
      type: Date,
      default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 gün
    },
    notes: String,
    calculatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
)

// Teklif numarası otomatik oluşturma
QuoteSchema.pre("save", async function (next) {
  if (!this.quoteNumber) {
    const prefix = "TEK"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0")
    this.quoteNumber = `${prefix}${timestamp}${random}`
  }
  next()
})

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema)
