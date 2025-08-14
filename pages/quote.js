"use client"

import { useState } from "react"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Layout from "../components/Layout"
import { Calculator, MapPin, Package, Calendar, User, Phone, Mail, Home, Clock } from "lucide-react"
import toast from "react-hot-toast"

const quoteSchema = z.object({
  // Personal Info
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),

  // Location Info
  fromCity: z.string().min(1, "Nereden şehri seçiniz"),
  fromDistrict: z.string().min(1, "Nereden ilçe seçiniz"),
  fromAddress: z.string().min(10, "Detaylı adres giriniz"),
  fromFloor: z.string().min(1, "Kat bilgisi giriniz"),

  toCity: z.string().min(1, "Nereye şehri seçiniz"),
  toDistrict: z.string().min(1, "Nereye ilçe seçiniz"),
  toAddress: z.string().min(10, "Detaylı adres giriniz"),
  toFloor: z.string().min(1, "Kat bilgisi giriniz"),

  // Service Info
  serviceType: z.string().min(1, "Hizmet türü seçiniz"),
  moveDate: z.string().min(1, "Taşınma tarihi seçiniz"),
  moveTime: z.string().min(1, "Taşınma saati seçiniz"),

  // Items
  rooms: z.string().min(1, "Oda sayısı seçiniz"),
  hasElevator: z.string().min(1, "Asansör durumu seçiniz"),

  // Additional Services
  additionalServices: z.array(z.string()).optional(),
  specialItems: z.string().optional(),
  notes: z.string().optional(),
})

export default function Quote() {
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    resolver: zodResolver(quoteSchema),
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
    { value: "standard", label: "Standart Nakliyat", description: "Ekonomik seçenek", icon: Package },
    { value: "express", label: "Ekspres Nakliyat", description: "Hızlı teslimat", icon: Clock },
    { value: "premium", label: "Premium Nakliyat", description: "Tam hizmet paketi", icon: Home },
  ]

  const additionalServicesList = [
    "Eşya ambalajlama",
    "Mobilya demontaj/montaj",
    "Temizlik hizmeti",
    "Eski eşya bertaraf",
    "Sigorta",
    "Geçici depolama",
  ]

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step)
    const isValid = await trigger(fieldsToValidate)

    if (isValid && step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const getFieldsForStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return ["name", "email", "phone"]
      case 2:
        return ["fromCity", "fromDistrict", "fromAddress", "fromFloor", "toCity", "toDistrict", "toAddress", "toFloor"]
      case 3:
        return ["serviceType", "moveDate", "moveTime", "rooms", "hasElevator"]
      case 4:
        return []
      default:
        return []
    }
  }

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")

      // Reset form or redirect
      setStep(1)
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout title="Teklif Al" description="Ücretsiz nakliyat teklifi alın - Çerkezköy Birlik Nakliyat">
      <Head>
        <title>Teklif Al - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Ücretsiz Teklif
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nakliyat Teklifi Alın</h1>
            <p className="text-xl text-gray-600">
              Detaylı bilgilerinizi paylaşın, size özel ücretsiz teklif hazırlayalım
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                      stepNumber <= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNumber}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            >
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Kişisel Bilgileriniz</h2>
                    <p className="text-gray-600">Size ulaşabilmemiz için iletişim bilgilerinizi giriniz</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label flex items-center">
                        <User className="w-4 h-4 mr-2 text-blue-600" />
                        Ad Soyad
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className={`input-field ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Adınız ve soyadınız"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="label flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-600" />
                        Telefon Numarası
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className={`input-field ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="0555 123 45 67"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="label flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      E-posta Adresi
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`input-field ${errors.email ? "border-red-500" : ""}`}
                      placeholder="ornek@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Location Information */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Adres Bilgileri</h2>
                    <p className="text-gray-600">Nereden nereye taşınacağınızı belirtiniz</p>
                  </div>

                  {/* From Address */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Nereden (Mevcut Adres)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="label">Şehir</label>
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

                      <div>
                        <label className="label">İlçe</label>
                        <input
                          {...register("fromDistrict")}
                          type="text"
                          className={`input-field ${errors.fromDistrict ? "border-red-500" : ""}`}
                          placeholder="İlçe"
                        />
                        {errors.fromDistrict && (
                          <p className="mt-1 text-sm text-red-600">{errors.fromDistrict.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-3">
                        <label className="label">Detaylı Adres</label>
                        <input
                          {...register("fromAddress")}
                          type="text"
                          className={`input-field ${errors.fromAddress ? "border-red-500" : ""}`}
                          placeholder="Mahalle, sokak, bina no"
                        />
                        {errors.fromAddress && (
                          <p className="mt-1 text-sm text-red-600">{errors.fromAddress.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="label">Kat</label>
                        <select
                          {...register("fromFloor")}
                          className={`input-field ${errors.fromFloor ? "border-red-500" : ""}`}
                        >
                          <option value="">Kat</option>
                          <option value="Zemin">Zemin</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((floor) => (
                            <option key={floor} value={floor}>
                              {floor}. Kat
                            </option>
                          ))}
                        </select>
                        {errors.fromFloor && <p className="mt-1 text-sm text-red-600">{errors.fromFloor.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* To Address */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Nereye (Yeni Adres)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="label">Şehir</label>
                        <select
                          {...register("toCity")}
                          className={`input-field ${errors.toCity ? "border-red-500" : ""}`}
                        >
                          <option value="">Şehir seçiniz</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        {errors.toCity && <p className="mt-1 text-sm text-red-600">{errors.toCity.message}</p>}
                      </div>

                      <div>
                        <label className="label">İlçe</label>
                        <input
                          {...register("toDistrict")}
                          type="text"
                          className={`input-field ${errors.toDistrict ? "border-red-500" : ""}`}
                          placeholder="İlçe"
                        />
                        {errors.toDistrict && <p className="mt-1 text-sm text-red-600">{errors.toDistrict.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-3">
                        <label className="label">Detaylı Adres</label>
                        <input
                          {...register("toAddress")}
                          type="text"
                          className={`input-field ${errors.toAddress ? "border-red-500" : ""}`}
                          placeholder="Mahalle, sokak, bina no"
                        />
                        {errors.toAddress && <p className="mt-1 text-sm text-red-600">{errors.toAddress.message}</p>}
                      </div>

                      <div>
                        <label className="label">Kat</label>
                        <select
                          {...register("toFloor")}
                          className={`input-field ${errors.toFloor ? "border-red-500" : ""}`}
                        >
                          <option value="">Kat</option>
                          <option value="Zemin">Zemin</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((floor) => (
                            <option key={floor} value={floor}>
                              {floor}. Kat
                            </option>
                          ))}
                        </select>
                        {errors.toFloor && <p className="mt-1 text-sm text-red-600">{errors.toFloor.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Service Details */}
              {step === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Hizmet Detayları</h2>
                    <p className="text-gray-600">Taşınma detaylarınızı belirtiniz</p>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="label">Hizmet Türü</label>
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
                          <div className="flex flex-col items-center text-center">
                            <service.icon className="w-8 h-8 text-blue-600 mb-2" />
                            <span className="block text-sm font-medium text-gray-900">{service.label}</span>
                            <span className="block text-sm text-gray-500">{service.description}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>}
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div>
                      <label className="label flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        Taşınma Saati
                      </label>
                      <select
                        {...register("moveTime")}
                        className={`input-field ${errors.moveTime ? "border-red-500" : ""}`}
                      >
                        <option value="">Saat seçiniz</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                      </select>
                      {errors.moveTime && <p className="mt-1 text-sm text-red-600">{errors.moveTime.message}</p>}
                    </div>
                  </div>

                  {/* Room Count and Elevator */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Oda Sayısı</label>
                      <select {...register("rooms")} className={`input-field ${errors.rooms ? "border-red-500" : ""}`}>
                        <option value="">Oda sayısı</option>
                        <option value="1+0">1+0</option>
                        <option value="1+1">1+1</option>
                        <option value="2+1">2+1</option>
                        <option value="3+1">3+1</option>
                        <option value="4+1">4+1</option>
                        <option value="5+1">5+1 ve üzeri</option>
                      </select>
                      {errors.rooms && <p className="mt-1 text-sm text-red-600">{errors.rooms.message}</p>}
                    </div>

                    <div>
                      <label className="label">Asansör Durumu</label>
                      <select
                        {...register("hasElevator")}
                        className={`input-field ${errors.hasElevator ? "border-red-500" : ""}`}
                      >
                        <option value="">Asansör durumu</option>
                        <option value="both">Her iki adreste var</option>
                        <option value="from">Sadece eski adreste var</option>
                        <option value="to">Sadece yeni adreste var</option>
                        <option value="none">Hiçbirinde yok</option>
                      </select>
                      {errors.hasElevator && <p className="mt-1 text-sm text-red-600">{errors.hasElevator.message}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Services */}
              {step === 4 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Ek Hizmetler</h2>
                    <p className="text-gray-600">İhtiyacınız olan ek hizmetleri seçiniz</p>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <label className="label">Ek Hizmetler (İsteğe bağlı)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {additionalServicesList.map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            {...register("additionalServices")}
                            type="checkbox"
                            value={service}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Items */}
                  <div>
                    <label className="label">Özel Eşyalar (İsteğe bağlı)</label>
                    <textarea
                      {...register("specialItems")}
                      rows={3}
                      className="input-field"
                      placeholder="Piyano, antika, değerli eşya vb. özel dikkat gerektiren eşyalarınızı belirtiniz"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="label">Ek Notlar (İsteğe bağlı)</label>
                    <textarea
                      {...register("notes")}
                      rows={4}
                      className="input-field"
                      placeholder="Taşınma ile ilgili özel durumlar, istekler veya sorularınızı yazabilirsiniz"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-gray-200">
                <button type="button" onClick={prevStep} className={`btn-secondary ${step === 1 ? "invisible" : ""}`}>
                  Geri
                </button>

                {step < totalSteps ? (
                  <button type="button" onClick={nextStep} className="btn-primary">
                    İleri
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Gönderiliyor...
                      </div>
                    ) : (
                      "Teklif Talebini Gönder"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
