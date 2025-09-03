import { Home, Building, Package, Shield, Truck, Clock, Phone, MessageCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Evden Eve Nakliyat",
      description: "Ev eşyalarınızı özenle paketleyip güvenle yeni adresinize taşıyoruz.",
      features: ["Profesyonel ambalajlama", "Eşya demontaj/montaj", "Sigortalı taşımacılık"],
      price: "Hemen iletişime geçin",
    },
    {
      icon: Building,
      title: "Ofis Taşımacılığı",
      description: "İş yerinizi minimum kesinti ile yeni lokasyonuna taşıyoruz.",
      features: ["IT ekipman taşıma", "Dosya arşiv taşıma", "Hafta sonu hizmeti"],
      price: "Hemen iletişime geçin",
    },
    {
      icon: Package,
      title: "Eşya Depolama",
      description: "Güvenli depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz.",
      features: ["Güvenli depo", "Klima kontrollü", "24/7 güvenlik"],
      price: "Hemen iletişime geçin",
    },
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Tüm eşyalarınız nakliyat sigortası kapsamında güvence altında.",
      features: ["Tam kapsamlı sigorta", "Hasar tazminatı", "Anında değerlendirme"],
      price: "Hemen iletişime geçin",
    },
    {
      icon: Truck,
      title: "Şehirlerarası Nakliyat",
      description: "Türkiye'nin her yerine güvenli ve hızlı nakliyat hizmeti.",
      features: ["Kapıdan kapıya", "Takip sistemi", "Ekspres teslimat"],
      price: "Hemen iletişime geçin",
    },
    {
      icon: Clock,
      title: "Acil Nakliyat",
      description: "Acil durumlarınızda 24 saat içinde nakliyat hizmeti sağlıyoruz.",
      features: ["24/7 hizmet", "Hızlı mobilizasyon", "Öncelikli işlem"],
      price: "Hemen iletişime geçin",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4 mr-2" />
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Size Özel Nakliyat Çözümleri</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Her türlü nakliyat ihtiyacınız için profesyonel hizmet. Evden eve, ofisten ofise, güvenli ve uygun fiyatlı
            taşımacılık.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="bg-gray-100 group-hover:bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-6 h-6 text-gray-600" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-gray-700 font-medium text-sm">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Hemen Teklif Alın
            </h3>
            <p className="text-gray-600 mb-6">
              Size özel fiyat teklifi için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+902827264886"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (0282) 726 48 86
              </a>
              <a
                href="https://wa.me/905443298983"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
