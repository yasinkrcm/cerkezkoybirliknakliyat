"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Calculator, MapPin, Package, Calendar, ArrowRight } from "lucide-react"
import toast from "react-hot-toast"

const quickQuoteSchema = z.object({
  fromCity: z.string().min(1, "Nereden şehri seçiniz"),
  toCity: z.string().min(1, "Nereye şehri seçiniz"),
  serviceType: z.string().min(1, "Hizmet türü seçiniz"),
  moveDate: z.string().min(1, "Taşınma tarihi seçiniz"),
})

export default function QuickQuote() {
  const [isLoading, setIsLoading] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(quickQuoteSchema),
  })

  const cities = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Mersin",
    "Diyarbakır",
    "Kayseri",
    "Eskişehir",
    "Tekirdağ",
    "Çerkezköy",
  ]

  const serviceTypes = [
    { value: "standard", label: "Standart Nakliyat", description: "Ekonomik seçenek" },
    { value: "express", label: "Ekspres Nakliyat", description: "Hızlı teslimat" },
    { value: "premium", label: "Premium Nakliyat", description: "Tam hizmet paketi" },
  ]

  const calculateEstimate = (data) => {
    // Basit fiyat hesaplama algoritması
    const basePrice = 500
    const distanceMultiplier = data.fromCity !== data.toCity ? 1.5 : 1
    const serviceMultiplier = {
      standard: 1,
      express: 1.3,
      premium: 1.6,
    }

    const estimate = basePrice * distanceMultiplier * serviceMultiplier[data.serviceType]
    return Math.round(estimate)
  }

  const onSubmit = async (data) => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const price = calculateEstimate(data)
      setEstimatedPrice(price)
      setIsLoading(false)
      toast.success("Tahmini fiyat hesaplandı!")
    }, 1500)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Anlık Teklif
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Hemen Fiyat Öğrenin</h2>
            <p className="text-xl text-gray-600">Nakliyat ihtiyacınız için anında tahmini fiyat alın</p>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From City */}
                <div>
                  <label className="label flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Nereden
                  </label>
                  <select
                    {...register("fromCity")}
                    className={`input-field ${errors.fromCity ? "border-red-500" : ""}`}
                  >
                    <option value="">Şehir seçiniz</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.fromCity && <p className="mt-1 text-sm text-red-600">{errors.fromCity.message}</p>}
                </div>

                {/* To City */}
                <div>
                  <label className="label flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Nereye
                  </label>
                  <select {...register("toCity")} className={`input-field ${errors.toCity ? "border-red-500" : ""}`}>
                    <option value="">Şehir seçiniz</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.toCity && <p className="mt-1 text-sm text-red-600">{errors.toCity.message}</p>}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="label flex items-center">
                  <Package className="w-4 h-4 mr-2 text-blue-600" />
                  Hizmet Türü
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {serviceTypes.map((service) => (
                    <label
                      key={service.value}
                      className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                        watch("serviceType") === service.value
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <input {...register("serviceType")} type="radio" value={service.value} className="sr-only" />
                      <div className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">{service.label}</span>
                        <span className="block text-sm text-gray-500">{service.description}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>}
              </div>

              {/* Move Date */}
              <div>
                <label className="label flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  Taşınma Tarihi
                </label>
                <input
                  {...register("moveDate")}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={`input-field ${errors.moveDate ? "border-red-500" : ""}`}
                />
                {errors.moveDate && <p className="mt-1 text-sm text-red-600">{errors.moveDate.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Hesaplanıyor...
                    </div>
                  ) : (
                    <>
                      Fiyat Hesapla
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Estimated Price */}
                {estimatedPrice && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex-1">
                    <div className="text-center">
                      <p className="text-sm text-green-600 font-medium">Tahmini Fiyat</p>
                      <p className="text-2xl font-bold text-green-700">{estimatedPrice}₺</p>
                      <p className="text-xs text-green-600 mt-1">*Kesin fiyat için detaylı teklif alınız</p>
                    </div>
                  </div>
                )}
              </div>
            </form>

            {/* Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center">
                <strong>Not:</strong> Bu tahmini bir fiyattır. Kesin fiyat için eşya miktarı, kat bilgisi ve ek
                hizmetler değerlendirilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
