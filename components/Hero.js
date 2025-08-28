"use client"

import { useState } from "react"
import { ArrowRight, Shield, Clock, Star, Truck, Phone, MessageCircle } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Eşyalarınız tam güvence altında",
    },
    {
      icon: Clock,
      title: "24 Saat Hizmet",
      description: "7/24 kesintisiz nakliyat hizmeti",
    },
    {
      icon: Star,
      title: "20+ Yorum",
      description: "Google'da 5 yıldız değerlendirme",
    },
  ]

  const stats = [
    { number: "5,024+", label: "Müşteri Yorumu" },
    { number: "5", label: "Yıldız Değerlendirme" },
    { number: "24/7", label: "Hizmet" },
    { number: "14", label: "Yıllık Tecrübe" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Truck className="w-4 h-4 mr-2" />
                Çerkezköy'ün En Güvenilir Nakliyat Firması
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Eşyalarınızı
                <span className="text-blue-600 block">Güvenle Taşıyoruz</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                14 yıllık tecrübemiz ve profesyonel ekibimizle evden eve, ofisten ofise nakliyat hizmetlerinde
                yanınızdayız. Sigortalı ve güvenli taşımacılık garantisi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+902827264886" 
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg group flex items-center justify-center contact-button phone-ring"
              >
                <Phone className="w-5 h-5 mr-2" />
                (0282) 726 48 86
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/905443298983" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg group flex items-center justify-center contact-button whatsapp-pulse"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/arac.jpg"
                alt="Profesyonel nakliyat ekibi"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
