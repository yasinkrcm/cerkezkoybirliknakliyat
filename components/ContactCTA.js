import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowRight } from "lucide-react"

export default function ContactCTA() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Hemen arayın, ücretsiz teklif alın",
      contact: "0282 123 45 67",
      action: "Ara",
      href: "tel:+902821234567",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "WhatsApp'tan mesaj gönderin",
      contact: "0555 123 45 67",
      action: "Mesaj Gönder",
      href: "https://wa.me/905551234567",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Mail,
      title: "E-posta",
      description: "Detaylı bilgi için e-posta gönderin",
      contact: "info@cerkezkoynakliyat.com",
      action: "E-posta Gönder",
      href: "mailto:info@cerkezkoynamkliyat.com",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "08:00 - 18:00" },
    { day: "Cumartesi", hours: "08:00 - 16:00" },
    { day: "Pazar", hours: "Acil durumlar için" },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Hemen İletişime Geçin</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nakliyat ihtiyacınız için bugün bizimle iletişime geçin. Ücretsiz keşif ve teklif hizmeti sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8">İletişim Yöntemlerimiz</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-center space-y-4">
                      {/* Icon */}
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <method.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{method.title}</h4>
                        <p className="text-blue-100 text-sm mb-3">{method.description}</p>
                        <p className="font-medium mb-4">{method.contact}</p>
                      </div>

                      {/* Action Button */}
                      <a
                        href={method.href}
                        className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${method.color}`}
                      >
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours & Location */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-semibold">Çalışma Saatleri</h4>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-blue-100">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-semibold">Adresimiz</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Atatürk Mahallesi
                  <br />
                  Cumhuriyet Caddesi No: 123
                  <br />
                  Çerkezköy / Tekirdağ
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-white hover:text-blue-200 transition-colors"
                >
                  Haritada Görüntüle
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Acil Durum Hattı</h3>
            <p className="text-red-100 mb-6">Acil nakliyat ihtiyaçlarınız için 7/24 ulaşabileceğiniz özel hattımız</p>
            <a
              href="tel:+905551234567"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              0555 123 45 67
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-blue-100 mb-6 text-lg">Ücretsiz keşif ve teklif için hemen iletişime geçin</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center"
              >
                İletişim Formu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
