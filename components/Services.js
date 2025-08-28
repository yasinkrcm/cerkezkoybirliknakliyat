import { Home, Building, Package, Shield, Truck, Clock, Phone, MessageCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Evden Eve Nakliyat",
      description: "Ev eşyalarınızı özenle paketleyip güvenle yeni adresinize taşıyoruz.",
      features: ["Profesyonel ambalajlama", "Eşya demontaj/montaj", "Sigortalı taşımacılık"],
      price: "500₺'den başlayan fiyatlar",
    },
    {
      icon: Building,
      title: "Ofis Taşımacılığı",
      description: "İş yerinizi minimum kesinti ile yeni lokasyonuna taşıyoruz.",
      features: ["IT ekipman taşıma", "Dosya arşiv taşıma", "Hafta sonu hizmeti"],
      price: "750₺'den başlayan fiyatlar",
    },
    {
      icon: Package,
      title: "Eşya Depolama",
      description: "Güvenli depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz.",
      features: ["Güvenli depo", "Klima kontrollü", "24/7 güvenlik"],
      price: "100₺/ay'dan başlayan fiyatlar",
    },
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Tüm eşyalarınız nakliyat sigortası kapsamında güvence altında.",
      features: ["Tam kapsamlı sigorta", "Hasar tazminatı", "Anında değerlendirme"],
      price: "Eşya değerinin %2'si",
    },
    {
      icon: Truck,
      title: "Şehirlerarası Nakliyat",
      description: "Türkiye'nin her yerine güvenli ve hızlı nakliyat hizmeti.",
      features: ["Kapıdan kapıya", "Takip sistemi", "Ekspres teslimat"],
      price: "Mesafeye göre fiyatlandırma",
    },
    {
      icon: Clock,
      title: "Acil Nakliyat",
      description: "Acil durumlarınızda 24 saat içinde nakliyat hizmeti sağlıyoruz.",
      features: ["24/7 hizmet", "Hızlı mobilizasyon", "Öncelikli işlem"],
      price: "%50 ek ücret ile",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4 mr-2" />
            Hizmetlerimiz
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Size Özel Nakliyat Çözümleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her türlü nakliyat ihtiyacınız için profesyonel hizmet. Evden eve, ofisten ofise, güvenli ve uygun fiyatlı
            taşımacılık.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-semibold">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Hangi Hizmete İhtiyacınız Var?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Size en uygun nakliyat çözümünü bulmak için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902827264886"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (0282) 726 48 86
              </a>
              <a
                href="https://wa.me/905443298983"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
