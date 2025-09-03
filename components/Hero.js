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
      title: "Güvenilir Hizmet",
      description: "14 yıllık tecrübe ile kaliteli hizmet",
    },
  ]

  const stats = [
    { number: "5000+", label: "Mutlu Müşteri" },
    { number: "14", label: "Yıllık Tecrübe" },
    { number: "50+", label: "Şehir" },
    { number: "24/7", label: "Hizmet" },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                <Truck className="w-4 h-4 mr-2" />
                Çerkezköy'ün En Güvenilir Nakliyat Firması
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Eşyalarınızı
                <span className="text-gray-700 block">Güvenle Taşıyoruz</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                14 yıllık tecrübemiz ve profesyonel ekibimizle evden eve, ofisten ofise nakliyat hizmetlerinde
                yanınızdayız. Sigortalı ve güvenli taşımacılık garantisi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+902827264886" 
                className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (0282) 726 48 86
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="https://wa.me/905443298983" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Neden Bizi Seçmelisiniz?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
