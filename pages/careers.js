"use client"

import { useState } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Briefcase, Users, Clock, MapPin, Send, CheckCircle } from "lucide-react"

const jobApplicationSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Telefon numarası en az 10 karakter olmalıdır"),
  position: z.string().min(1, "Pozisyon seçiniz"),
  experience: z.string().min(1, "Deneyim seviyesi seçiniz"),
  city: z.string().min(2, "Şehir giriniz"),
  coverLetter: z.string().min(50, "Ön yazı en az 50 karakter olmalıdır"),
  hasLicense: z.boolean(),
  canTravel: z.boolean(),
  kvkkConsent: z.boolean().refine((val) => val === true, "KVKK onayı zorunludur"),
})

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(jobApplicationSchema),
  })

  const positions = [
    { value: "driver", label: "Şoför" },
    { value: "helper", label: "Yardımcı Personel" },
    { value: "customer-service", label: "Müşteri Hizmetleri" },
    { value: "sales", label: "Satış Temsilcisi" },
    { value: "operations", label: "Operasyon Uzmanı" },
    { value: "admin", label: "İdari Personel" },
  ]

  const experienceLevels = [
    { value: "0-1", label: "0-1 yıl" },
    { value: "1-3", label: "1-3 yıl" },
    { value: "3-5", label: "3-5 yıl" },
    { value: "5+", label: "5+ yıl" },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Takım Çalışması",
      description: "Deneyimli ve destekleyici ekip arkadaşları",
    },
    {
      icon: Clock,
      title: "Esnek Çalışma",
      description: "İş-yaşam dengesi odaklı çalışma saatleri",
    },
    {
      icon: Briefcase,
      title: "Kariyer Gelişimi",
      description: "Sürekli eğitim ve gelişim fırsatları",
    },
    {
      icon: MapPin,
      title: "Merkezi Konum",
      description: "Çerkezköy merkezde modern ofis",
    },
  ]

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error("Başvuru gönderilemedi")
      }
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyiniz.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Layout title="Başvuru Gönderildi" description="İş başvurunuz başarıyla gönderildi">
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Başvurunuz Alındı!</h2>
            <p className="text-gray-600 mb-6">
              İş başvurunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Yeni Başvuru Yap
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Kariyer - İş İlanları" description="Çerkezköy Birlik Nakliyat'ta kariyer fırsatları ve iş başvurusu">
      <Head>
        <title>Kariyer - İş İlanları - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Kariyer
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ekibimize Katılın</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Çerkezköy Birlik Nakliyat ailesi olarak, yetenekli ve motivasyonu yüksek çalışma arkadaşları arıyoruz.
              Kariyerinizi bizimle şekillendirin.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Bizimle Çalışmalısınız?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Çalışanlarımızın mutluluğu ve gelişimi bizim için öncelik. İşte size sunduğumuz avantajlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">İş Başvurusu</h2>
              <p className="text-gray-600">Aşağıdaki formu doldurarak bize başvurunuzu gönderebilirsiniz.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Kişisel Bilgiler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ad *</label>
                      <input
                        {...register("firstName")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adınız"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Soyad *</label>
                      <input
                        {...register("lastName")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Soyadınız"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="ornek@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0532 123 45 67"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Şehir *</label>
                      <input
                        {...register("city")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="İstanbul"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Job Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">İş Bilgileri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Başvurulan Pozisyon *</label>
                      <select
                        {...register("position")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pozisyon seçiniz</option>
                        {positions.map((position) => (
                          <option key={position.value} value={position.value}>
                            {position.label}
                          </option>
                        ))}
                      </select>
                      {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Deneyim Seviyesi *</label>
                      <select
                        {...register("experience")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Deneyim seçiniz</option>
                        {experienceLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                      {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ön Yazı *</label>
                  <textarea
                    {...register("coverLetter")}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Kendinizi tanıtın ve neden bu pozisyon için uygun olduğunuzu açıklayın..."
                  />
                  {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>}
                </div>

                {/* Additional Questions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ek Bilgiler</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        {...register("hasLicense")}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm text-gray-700">Geçerli sürücü belgesine sahibim</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        {...register("canTravel")}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm text-gray-700">Seyahat edebilirim</label>
                    </div>

                    <div className="flex items-start">
                      <input
                        {...register("kvkkConsent")}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        <a href="/kvkk" className="text-blue-600 hover:underline">
                          KVKK
                        </a>{" "}
                        kapsamında kişisel verilerimin işlenmesini kabul ediyorum *
                      </label>
                    </div>
                    {errors.kvkkConsent && <p className="text-red-500 text-sm">{errors.kvkkConsent.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isLoading ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
