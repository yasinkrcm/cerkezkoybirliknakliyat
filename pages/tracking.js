"use client"

import { useState } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react"
import toast from "react-hot-toast"

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [trackingResult, setTrackingResult] = useState(null)

  const handleTrack = async (e) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      toast.error("Lütfen takip numaranızı giriniz")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      const mockResult = {
        trackingNumber: trackingNumber.toUpperCase(),
        status: "in_transit",
        statusText: "Yolda",
        estimatedDelivery: "2024-01-15",
        currentLocation: "İstanbul Depo",
        customerInfo: {
          name: "Ahmet Yılmaz",
          phone: "0555 123 45 67",
        },
        shipmentInfo: {
          origin: "Çerkezköy, Tekirdağ",
          destination: "Kadıköy, İstanbul",
          serviceType: "Standart Nakliyat",
          items: "2+1 Ev Eşyası",
        },
        history: [
          {
            status: "confirmed",
            statusText: "Onaylandı",
            location: "Çerkezköy",
            date: "2024-01-10",
            time: "14:30",
            description: "Nakliyat talebi onaylandı ve randevu oluşturuldu",
          },
          {
            status: "picked_up",
            statusText: "Alındı",
            location: "Çerkezköy",
            date: "2024-01-12",
            time: "09:30",
            description: "Eşyalarınız alındı ve depoya getirildi",
          },
          {
            status: "in_transit",
            statusText: "Yolda",
            location: "İstanbul Depo",
            date: "2024-01-13",
            time: "14:15",
            description: "Eşyalarınız İstanbul deposuna ulaştı",
          },
          {
            status: "out_for_delivery",
            statusText: "Dağıtımda",
            location: "İstanbul",
            date: "2024-01-15",
            time: "08:00",
            description: "Eşyalarınız teslimat için yola çıktı",
          },
        ],
      }

      setTrackingResult(mockResult)
      setIsLoading(false)
      toast.success("Gönderi bilgileri getirildi")
    }, 1500)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-5 h-5" />
      case "picked_up":
        return <Package className="w-5 h-5" />
      case "in_transit":
        return <Truck className="w-5 h-5" />
      case "out_for_delivery":
        return <MapPin className="w-5 h-5" />
      case "delivered":
        return <CheckCircle className="w-5 h-5" />
      default:
        return <Clock className="w-5 h-5" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "text-blue-600 bg-blue-100"
      case "picked_up":
        return "text-purple-600 bg-purple-100"
      case "in_transit":
        return "text-orange-600 bg-orange-100"
      case "out_for_delivery":
        return "text-yellow-600 bg-yellow-100"
      case "delivered":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const sampleTrackingNumbers = ["CBN123456789", "CBN987654321", "CBN456789123"]

  return (
    <Layout title="Gönderi Takibi" description="Nakliyat gönderinizi takip edin - Çerkezköy Birlik Nakliyat">
      <Head>
        <title>Gönderi Takibi - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search className="w-4 h-4 mr-2" />
              Gönderi Takibi
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Eşyalarınızı Takip Edin</h1>
            <p className="text-xl text-gray-600">
              Takip numaranızla eşyalarınızın nerede olduğunu anlık olarak öğrenin
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tracking Input */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 mb-12">
              <form onSubmit={handleTrack} className="space-y-6">
                <div className="text-center text-white mb-6">
                  <h2 className="text-2xl font-bold mb-2">Takip Numaranızı Giriniz</h2>
                  <p className="text-blue-100">Takip numaranız CBN ile başlar ve 12 haneli bir koddur</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                      placeholder="CBN123456789"
                      className="w-full px-6 py-4 rounded-lg text-lg border-0 focus:ring-4 focus:ring-blue-300 outline-none"
                      maxLength={12}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Aranıyor...
                      </div>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Takip Et
                      </>
                    )}
                  </button>
                </div>

                {/* Sample Numbers */}
                <div className="text-center">
                  <p className="text-blue-100 text-sm mb-3">Demo için örnek takip numaraları:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {sampleTrackingNumbers.map((number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => setTrackingNumber(number)}
                        className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full transition-colors"
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </div>

            {/* Tracking Results */}
            {trackingResult && (
              <div className="space-y-8">
                {/* Status Overview */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Current Status */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Mevcut Durum</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600">Takip Numarası</p>
                          <p className="text-2xl font-bold text-gray-900">{trackingResult.trackingNumber}</p>
                        </div>

                        <div
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}
                        >
                          {getStatusIcon(trackingResult.status)}
                          <span className="ml-2">{trackingResult.statusText}</span>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600">Mevcut Konum</p>
                          <p className="text-lg font-semibold text-gray-900">{trackingResult.currentLocation}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600">Tahmini Teslimat</p>
                          <p className="text-lg font-semibold text-blue-600">{trackingResult.estimatedDelivery}</p>
                        </div>
                      </div>
                    </div>

                    {/* Shipment Info */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Gönderi Bilgileri</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Müşteri:</span>
                          <span className="font-medium">{trackingResult.customerInfo.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Telefon:</span>
                          <span className="font-medium">{trackingResult.customerInfo.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nereden:</span>
                          <span className="font-medium">{trackingResult.shipmentInfo.origin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nereye:</span>
                          <span className="font-medium">{trackingResult.shipmentInfo.destination}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hizmet:</span>
                          <span className="font-medium">{trackingResult.shipmentInfo.serviceType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Eşya:</span>
                          <span className="font-medium">{trackingResult.shipmentInfo.items}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Gönderi Geçmişi</h3>

                  <div className="relative">
                    {trackingResult.history.map((event, index) => (
                      <div key={index} className="relative flex items-start space-x-4 pb-8 last:pb-0">
                        {/* Timeline Line */}
                        {index < trackingResult.history.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                        )}

                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(event.status)}`}
                        >
                          {getStatusIcon(event.status)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900">{event.statusText}</h4>
                              <p className="text-gray-600 mt-1">{event.description}</p>
                              <p className="text-sm text-gray-500 mt-2">📍 {event.location}</p>
                            </div>
                            <div className="text-right mt-2 sm:mt-0 sm:ml-4">
                              <p className="text-sm font-medium text-gray-900">{event.date}</p>
                              <p className="text-sm text-gray-600">{event.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-blue-50 rounded-2xl p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sorularınız mı var?</h3>
                    <p className="text-gray-600 mb-6">
                      Gönderiniz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+902821234567"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        0282 123 45 67
                      </a>
                      <a
                        href="mailto:info@cerkezkoynamkliyat.com"
                        className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        E-posta Gönder
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* How to Track Info */}
            {!trackingResult && (
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Takip Numaranızı Nasıl Bulabilirsiniz?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">E-posta</h4>
                    <p className="text-sm text-gray-600">Rezervasyon onayı e-postanızda takip numaranız bulunur</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">SMS</h4>
                    <p className="text-sm text-gray-600">Nakliyat başladığında SMS ile takip numaranız gönderilir</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fiş</h4>
                    <p className="text-sm text-gray-600">
                      Eşya teslim alındığında verilen fişte takip numarası yazılıdır
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
