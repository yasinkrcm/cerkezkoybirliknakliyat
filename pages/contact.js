"use client"

import { useState } from "react"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Layout from "../components/Layout"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import toast from "react-hot-toast"

const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  subject: z.string().min(5, "Konu en az 5 karakter olmalıdır"),
  message: z.string().min(20, "Mesaj en az 20 karakter olmalıdır"),
})

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["0282 123 45 67", "0555 123 45 67 (Acil)"],
      action: "Ara",
      href: "tel:+902821234567",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@cerkezkoynamkliyat.com", "destek@cerkezkoynamkliyat.com"],
      action: "E-posta Gönder",
      href: "mailto:info@cerkezkoynamkliyat.com",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Atatürk Mah. Cumhuriyet Cad. No:123", "Çerkezköy / Tekirdağ"],
      action: "Haritada Gör",
      href: "https://maps.google.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 08:00 - 18:00", "Cumartesi: 08:00 - 16:00"],
      action: null,
      href: null,
      color: "bg-purple-500",
    },
  ]

  const workingHours = [
    { day: "Pazartesi", hours: "08:00 - 18:00" },
    { day: "Salı", hours: "08:00 - 18:00" },
    { day: "Çarşamba", hours: "08:00 - 18:00" },
    { day: "Perşembe", hours: "08:00 - 18:00" },
    { day: "Cuma", hours: "08:00 - 18:00" },
    { day: "Cumartesi", hours: "08:00 - 16:00" },
    { day: "Pazar", hours: "Acil durumlar için" },
  ]

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
      reset()
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout
      title="İletişim"
      description="Çerkezköy Birlik Nakliyat ile iletişime geçin - Telefon, e-posta, adres bilgileri"
    >
      <Head>
        <title>İletişim - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">İletişim</h1>
            <p className="text-xl text-gray-600">
              Nakliyat ihtiyaçlarınız için bizimle iletişime geçin. Profesyonel ekibimiz size yardımcı olmaktan mutluluk
              duyar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>

                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                {info.action && (
                  <a
                    href={info.href}
                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                    rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-block w-full py-2 px-4 rounded-lg text-white font-medium transition-colors text-sm ${info.color}`}
                  >
                    {info.action}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bize Mesaj Gönderin</h2>
                  <p className="text-gray-600">Sorularınızı, önerilerinizi veya teklif talebinizi iletebilirsiniz</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Ad Soyad</label>
                      <input
                        {...register("name")}
                        type="text"
                        className={`input-field ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Adınız ve soyadınız"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="label">Telefon Numarası</label>
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
                    <label className="label">E-posta Adresi</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`input-field ${errors.email ? "border-red-500" : ""}`}
                      placeholder="ornek@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="label">Konu</label>
                    <input
                      {...register("subject")}
                      type="text"
                      className={`input-field ${errors.subject ? "border-red-500" : ""}`}
                      placeholder="Mesajınızın konusu"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="label">Mesajınız</label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className={`input-field ${errors.message ? "border-red-500" : ""}`}
                      placeholder="Detaylı mesajınızı buraya yazabilirsiniz..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Gönderiliyor...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Mesajı Gönder
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Çalışma Saatleri
                </h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Hızlı İletişim</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Acil durumlar için doğrudan arayabilir veya WhatsApp'tan mesaj gönderebilirsiniz
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+902821234567"
                    className="flex items-center justify-center w-full bg-white/20 hover:bg-white/30 py-3 px-4 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Ara
                  </a>

                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Ofisimiz
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Harita Görünümü</p>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Atatürk Mahallesi</p>
                  <p>Cumhuriyet Caddesi No: 123</p>
                  <p>Çerkezköy / Tekirdağ</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Haritada Büyüt →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-600">En çok merak edilen sorular ve cevapları</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Teklif almak ücretsiz mi?",
                answer: "Evet, tüm teklif ve keşif hizmetlerimiz tamamen ücretsizdir. Hiçbir ön ödeme talep etmiyoruz.",
              },
              {
                question: "Sigorta kapsamında mıyım?",
                answer:
                  "Evet, tüm nakliyat hizmetlerimiz sigorta kapsamındadır. Eşyalarınız tam güvence altında taşınır.",
              },
              {
                question: "Hafta sonu hizmet veriyor musunuz?",
                answer:
                  "Cumartesi günleri normal mesai saatlerinde hizmet veriyoruz. Pazar günleri acil durumlar için iletişime geçebilirsiniz.",
              },
              {
                question: "Hangi şehirlere hizmet veriyorsunuz?",
                answer: "Türkiye'nin 50 şehrine hizmet veriyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
