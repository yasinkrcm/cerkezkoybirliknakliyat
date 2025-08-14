import Head from "next/head"
import Layout from "../components/Layout"
import { Home, Building, Package, Shield, Truck, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Evden Eve Nakliyat",
      description: "Ev eşyalarınızı özenle paketleyip güvenle yeni adresinize taşıyoruz.",
      features: [
        "Profesyonel ambalajlama malzemeleri",
        "Eşya demontaj ve montaj hizmeti",
        "Sigortalı taşımacılık garantisi",
        "Kat başı ek ücret yok",
        "Temizlik sonrası teslim",
      ],
      startingPrice: "500₺",
      image: "/placeholder.svg?height=300&width=400&text=Evden+Eve+Nakliyat",
    },
    {
      icon: Building,
      title: "Ofis Taşımacılığı",
      description: "İş yerinizi minimum kesinti ile yeni lokasyonuna taşıyoruz.",
      features: [
        "IT ekipman özel taşıma",
        "Dosya arşiv organizasyonu",
        "Hafta sonu özel hizmeti",
        "Kurulum ve yerleştirme",
        "İş sürekliliği garantisi",
      ],
      startingPrice: "750₺",
      image: "/placeholder.svg?height=300&width=400&text=Ofis+Taşımacılığı",
    },
    {
      icon: Package,
      title: "Eşya Depolama",
      description: "Güvenli depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz.",
      features: [
        "Klima kontrollü depo",
        "24/7 güvenlik kamerası",
        "Nem ve sıcaklık kontrolü",
        "Esnek depolama süreleri",
        "Sigortalı saklama",
      ],
      startingPrice: "100₺/ay",
      image: "/placeholder.svg?height=300&width=400&text=Eşya+Depolama",
    },
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Tüm eşyalarınız nakliyat sigortası kapsamında güvence altında.",
      features: [
        "Tam kapsamlı sigorta",
        "Anında hasar değerlendirme",
        "Hızlı tazminat ödemesi",
        "Değerli eşya özel sigortası",
        "Uluslararası sigorta geçerliliği",
      ],
      startingPrice: "Eşya değerinin %2'si",
      image: "/placeholder.svg?height=300&width=400&text=Sigortalı+Taşımacılık",
    },
    {
      icon: Truck,
      title: "Şehirlerarası Nakliyat",
      description: "Türkiye'nin her yerine güvenli ve hızlı nakliyat hizmeti.",
      features: [
        "Kapıdan kapıya hizmet",
        "GPS takip sistemi",
        "Ekspres teslimat seçeneği",
        "Ara şehir güzergahları",
        "Özel araç tahsisi",
      ],
      startingPrice: "Mesafeye göre",
      image: "/placeholder.svg?height=300&width=400&text=Şehirlerarası+Nakliyat",
    },
    {
      icon: Clock,
      title: "Acil Nakliyat",
      description: "Acil durumlarınızda 24 saat içinde nakliyat hizmeti sağlıyoruz.",
      features: [
        "24/7 hizmet imkanı",
        "2 saat içinde mobilizasyon",
        "Öncelikli işlem garantisi",
        "Acil durum ekibi",
        "Hızlı çözüm odaklı",
      ],
      startingPrice: "%50 ek ücret",
      image: "/placeholder.svg?height=300&width=400&text=Acil+Nakliyat",
    },
  ]

  const additionalServices = [
    "Eşya ambalajlama ve paketleme",
    "Mobilya demontaj ve montaj",
    "Temizlik hizmeti",
    "Eski eşya bertaraf",
    "Piyano taşımacılığı",
    "Antika eşya taşıma",
    "Asansör kiralama",
    "Geçici depolama",
  ]

  return (
    <Layout
      title="Hizmetlerimiz"
      description="Çerkezköy Birlik Nakliyat hizmetleri - Evden eve, ofis taşımacılığı, depolama ve daha fazlası"
    >
      <Head>
        <title>Hizmetlerimiz - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              14 yıllık tecrübemizle her türlü nakliyat ihtiyacınıza profesyonel çözümler sunuyoruz. Evden eve, ofisten
              ofise, güvenli ve uygun fiyatlı taşımacılık hizmetleri.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    
                    <a href="/quote" className="btn-primary">
                      Teklif Al
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Ek Hizmetlerimiz</h2>
            <p className="text-gray-600 mb-12">Nakliyat sürecinizi kolaylaştıran ek hizmetlerimizle tam destek</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-gray-700 font-medium text-center">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hangi Hizmete İhtiyacınız Var?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Size en uygun nakliyat çözümünü bulmak için ücretsiz keşif ve teklif hizmeti sunuyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Ücretsiz Teklif Al
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
