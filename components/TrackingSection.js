"use client"

import { useState } from "react"
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react"
import toast from "react-hot-toast"

export default function TrackingSection() {
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
        history: [
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
      case "picked_up":
        return "text-blue-600 bg-blue-100"
      case "in_transit":
        return "text-orange-600 bg-orange-100"
      case "out_for_delivery":
        return "text-purple-600 bg-purple-100"
      case "delivered":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search className="w-4 h-4 mr-2" />
              Gönderi Takibi
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Eşyalarınızı Takip Edin</h2>
            <p className="text-xl text-gray-600">Takip numaranızla eşyalarınızın nerede olduğunu öğrenin</p>
          </div>

          {/* Tracking Form */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 mb-12">
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Takip numaranızı giriniz (örn: CBN123456789)"
                  className="w-full px-6 py-4 rounded-lg text-lg border-0 focus:ring-4 focus:ring-blue-300 outline-none"
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
            </form>
          </div>

          {/* Tracking Results */}
          {trackingResult && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              {/* Status Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Takip No: {trackingResult.trackingNumber}</h3>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}
                  >
                    {getStatusIcon(trackingResult.status)}
                    <span className="ml-2">{trackingResult.statusText}</span>
                  </div>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                  <p className="text-sm text-gray-600">Tahmini Teslimat</p>
                  <p className="text-lg font-semibold text-gray-900">{trackingResult.estimatedDelivery}</p>
                  <p className="text-sm text-gray-600">Mevcut Konum: {trackingResult.currentLocation}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Gönderi Geçmişi</h4>
                <div className="relative">
                  {trackingResult.history.map((event, index) => (
                    <div key={index} className="relative flex items-start space-x-4 pb-6">
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
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">{event.statusText}</h5>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-sm font-medium text-gray-900">{event.date}</p>
                            <p className="text-sm text-gray-600">{event.time}</p>
                            <p className="text-sm text-gray-600">{event.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  Sorularınız için: <strong>0282 123 45 67</strong> numaralı telefonu arayabilir veya{" "}
                  <strong>info@cerkezkoynamkliyat.com</strong> adresine e-posta gönderebilirsiniz.
                </p>
              </div>
            </div>
          )}

          {/* Sample Tracking Numbers */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">Demo için örnek takip numaraları:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["CBN123456789", "CBN987654321", "CBN456789123"].map((number) => (
                <button
                  key={number}
                  onClick={() => setTrackingNumber(number)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
