import mongoose from "mongoose"

const ShipmentSchema = new mongoose.Schema(
  {
    trackingNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerInfo: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    origin: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String, required: true },
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    destination: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String, required: true },
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        weight: { type: Number, required: true },
        dimensions: {
          length: Number,
          width: Number,
          height: Number,
        },
        fragile: { type: Boolean, default: false },
        valuable: { type: Boolean, default: false },
      },
    ],
    serviceType: {
      type: String,
      enum: ["standard", "express", "premium"],
      default: "standard",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "picked_up", "in_transit", "delivered", "cancelled"],
      default: "pending",
    },
    statusHistory: [
      {
        status: String,
        timestamp: { type: Date, default: Date.now },
        location: String,
        note: String,
        updatedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    pricing: {
      basePrice: { type: Number, required: true },
      additionalServices: [
        {
          name: String,
          price: Number,
        },
      ],
      discount: { type: Number, default: 0 },
      totalPrice: { type: Number, required: true },
    },
    scheduledDate: {
      type: Date,
      required: true,
    },
    estimatedDelivery: {
      type: Date,
      required: true,
    },
    actualDelivery: Date,
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vehicle: {
      type: String,
    },
    notes: {
      customer: String,
      internal: String,
    },
    insurance: {
      required: { type: Boolean, default: false },
      value: Number,
      premium: Number,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "transfer", "online"],
    },
  },
  {
    timestamps: true,
  },
)

// Takip numarası otomatik oluşturma
ShipmentSchema.pre("save", async function (next) {
  if (!this.trackingNumber) {
    const prefix = "CBN"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
    this.trackingNumber = `${prefix}${timestamp}${random}`
  }
  next()
})

// Status değişikliklerini history'ye ekle
ShipmentSchema.pre("save", function (next) {
  if (this.isModified("status") && !this.isNew) {
    this.statusHistory.push({
      status: this.status,
      timestamp: new Date(),
      location: this.destination.city,
    })
  }
  next()
})

export default mongoose.models.Shipment || mongoose.model("Shipment", ShipmentSchema)
