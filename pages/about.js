import Head from "next/head"
import Layout from "../components/Layout"
import { Award, Users, Shield, Clock, Star } from "lucide-react"

export default function About() {
  const stats = [
    { number: "14", label: "Yıllık Tecrübe", suffix: "+" },
    { number: "5000", label: "Mutlu Müşteri", suffix: "+" },
    { number: "50", label: "Şehir", suffix: "+" },
    { number: "25", label: "Uzman Personel", suffix: "+" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description:
        "Eşyalarınızı kendi eşyamız gibi özenle taşıyoruz. 14 yıllık tecrübemizle güvenilirliğimizi kanıtladık.",
    },
    {
      icon: Users,
      title: "Profesyonellik",
      description: "Deneyimli ve eğitimli personelimiz, modern ekipmanlarımızla en iyi hizmeti sunuyoruz.",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Belirlenen tarih ve saatte eşyalarınızı teslim etme konusunda %98 başarı oranımız var.",
    },
    {
      icon: Star,
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti bizim için en önemli değer. Her projede mükemmelliği hedefliyoruz.",
    },
  ]

  const timeline = [
    {
      year: "2010",
      title: "Kuruluş",
      description: "Çerkezköy'de küçük bir ekiple nakliyat hizmetine başladık.",
    },
    {
      year: "2013",
      title: "Büyüme",
      description: "Araç filomuz ve personel sayımızı artırarak hizmet kalitemizi geliştirdik.",
    },
    {
      year: "2016",
      title: "ISO 9001",
      description: "Kalite yönetim sistemi belgemizi alarak standartlarımızı uluslararası seviyeye çıkardık.",
    },
    {
      year: "2019",
      title: "Teknoloji",
      description: "GPS takip sistemi ve online rezervasyon platformunu devreye aldık.",
    },
    {
      year: "2022",
      title: "Genişleme",
      description: "Hizmet ağımızı Türkiye'nin 50 şehrine yaydık.",
    },
    {
      year: "2024",
      title: "Bugün",
      description: "5000+ mutlu müşteriyle Türkiye'nin güvenilir nakliyat firması olduk.",
    },
  ]

  const team = [
    {
      name: "Mehmet Birlik",
      position: "Kurucu & Genel Müdür",
      experience: "20 yıl",
      image: "/placeholder.svg?height=300&width=300&text=Mehmet+Birlik",
    },
    {
      name: "Ayşe Demir",
      position: "Operasyon Müdürü",
      experience: "12 yıl",
      image: "/placeholder.svg?height=300&width=300&text=Ayşe+Demir",
    },
    {
      name: "Ali Kaya",
      position: "Lojistik Koordinatörü",
      experience: "8 yıl",
      image: "/placeholder.svg?height=300&width=300&text=Ali+Kaya",
    },
  ]

  const certificates = [
    "ISO 9001:2015 Kalite Yönetim Sistemi",
    "Nakliyat Yetki Belgesi",
    "Karayolu Taşıma Ruhsatı",
    "Sigorta Acenteliği Belgesi",
  ]

  return (
    <Layout title="Hakkımızda" description="Çerkezköy Birlik Nakliyat hakkında - 14 yıllık tecrübe, güvenilir hizmet">
      <Head>
        <title>Hakkımızda - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Hakkımızda</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              2010 yılından beri Çerkezköy ve çevresinde güvenilir nakliyat hizmeti sunuyoruz. Profesyonel ekibimiz ve
              modern araç filomuzla eşyalarınızı güvenle taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Çerkezköy Birlik Nakliyat, 2010 yılında Mehmet Birlik tarafından kuruldu. Küçük bir ekiple
                    başladığımız bu yolculukta, müşteri memnuniyetini her zaman ön planda tuttuk.
                  </p>
                  <p>
                    14 yıllık tecrübemiz boyunca binlerce ailenin ve işletmenin taşınma sürecinde yanında olduk. Her
                    geçen gün kendimizi geliştirerek, sektörün öncü firmalarından biri haline geldik.
                  </p>
                  <p>
                    Bugün 25 kişilik profesyonel ekibimiz, modern araç filomuz ve kaliteli hizmet anlayışımızla
                    Türkiye'nin 50 şehrinde hizmet veriyoruz.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Çerkezköy+Birlik+Nakliyat+Ekibi"
                  alt="Çerkezköy Birlik Nakliyat Ekibi"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl">
                  <div className="text-2xl font-bold">2010</div>
                  <div className="text-sm">Kuruluş Yılı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hizmet verdiğimiz her alanda bu değerlerle hareket ediyor, müşterilerimize en iyi deneyimi sunmaya
              odaklanıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Tarihçemiz</h2>
            <p className="text-xl text-gray-600">14 yıllık yolculuğumuzun önemli kilometre taşları</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    {/* Year Circle */}
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Yönetim Ekibimiz</h2>
            <p className="text-xl text-gray-600">Deneyimli ve uzman kadromuzla hizmetinizdeyiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {member.experience} tecrübe
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Belgelerimiz</h2>
            <p className="text-xl text-blue-100">Kaliteli hizmet sunmak için gerekli tüm belgelere sahibiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <p className="font-medium">{certificate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Bizimle Çalışmaya Hazır mısınız?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            14 yıllık tecrübemiz ve profesyonel ekibimizle nakliyat ihtiyaçlarınızda yanınızdayız
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-primary text-lg px-8 py-4">
              Ücretsiz Teklif Al
            </a>
            <a href="/contact" className="btn-outline text-lg px-8 py-4">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
