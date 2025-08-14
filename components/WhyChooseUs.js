import { Shield, Users, Clock, Award, Truck, HeadphonesIcon } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Güvenilir Hizmet",
      description: "14 yıllık tecrübemiz ve binlerce mutlu müşterimizle güvenilirliğimizi kanıtladık.",
      stats: "5000+ Mutlu Müşteri",
    },
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description: "Deneyimli ve eğitimli personelimiz eşyalarınızı özenle taşır.",
      stats: "25+ Uzman Personel",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Belirlenen tarih ve saatte eşyalarınızı teslim etme garantisi.",
      stats: "%98 Zamanında Teslimat",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "ISO 9001 kalite belgeli hizmet anlayışımızla mükemmelliği hedefliyoruz.",
      stats: "ISO 9001 Belgeli",
    },
    {
      icon: Truck,
      title: "Modern Araç Filosu",
      description: "Yeni model, bakımlı ve güvenli araçlarımızla eşyalarınızı taşıyoruz.",
      stats: "20+ Modern Araç",
    },
    {
      icon: HeadphonesIcon,
      title: "7/24 Destek",
      description: "Her zaman yanınızdayız. Sorularınız için 7/24 müşteri hizmetleri.",
      stats: "7/24 Canlı Destek",
    },
  ]

  const testimonials = [
    {
      name: "Mehmet Yılmaz",
      location: "İstanbul",
      rating: 5,
      comment: "Çok memnun kaldım. Eşyalarım hiç zarar görmeden taşındı. Kesinlikle tavsiye ederim.",
      service: "Evden Eve Nakliyat",
    },
    {
      name: "Ayşe Demir",
      location: "Bursa",
      rating: 5,
      comment: "Profesyonel ekip, zamanında teslimat. Fiyatları da çok uygun. Teşekkürler.",
      service: "Ofis Taşımacılığı",
    },
    {
      name: "Ali Kaya",
      location: "Tekirdağ",
      rating: 5,
      comment: "İkinci kez hizmet aldım. Her seferinde aynı kaliteli hizmet. Güvenilir firma.",
      service: "Şehirlerarası Nakliyat",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Neden Biz?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Neden Çerkezköy Birlik'i Seçmelisiniz?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            14 yıllık tecrübemiz, profesyonel ekibimiz ve müşteri memnuniyeti odaklı hizmet anlayışımızla fark
            yaratıyoruz.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{reason.description}</p>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-semibold text-sm">{reason.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Müşterilerimiz Ne Diyor?</h3>
            <p className="text-gray-600">Binlerce mutlu müşterimizden bazı yorumlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Siz de memnun müşterilerimize katılın</p>
            <a href="/quote" className="btn-primary text-lg px-8 py-4">
              Ücretsiz Teklif Alın
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
