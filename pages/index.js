import Head from "next/head"
import Layout from "../components/Layout"

import { useState } from "react"
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Star, 
  Truck, 
  Home as HomeIcon,
  Building, 
  Package, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  CheckCircle,
  Users,
  Award,
  Zap
} from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState('evden-eve')

  const features = [
    {
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Eşyalarınız tam güvence altında",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Belirlenen sürede güvenli teslimat",
    },
    {
      icon: Star,
      title: "14 Yıllık Tecrübe",
      description: "2010'dan beri güvenilir hizmet",
    },
  ]

  const stats = [
    { number: "5000+", label: "Mutlu Müşteri" },
    { number: "14", label: "Yıllık Tecrübe" },
    { number: "50+", label: "Şehir" },
    { number: "24/7", label: "Destek" },
  ]

  const services = [
    {
      id: 'evden-eve',
      icon: HomeIcon,
      title: "Evden Eve Nakliyat",
      description: "Ev eşyalarınızı özenle paketleyip güvenle yeni adresinize taşıyoruz.",
      features: ["Profesyonel ambalajlama", "Eşya demontaj/montaj", "Sigortalı taşımacılık"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
    {
      id: 'ofis',
      icon: Building,
      title: "Ofis Taşımacılığı",
      description: "İş yerinizi minimum kesinti ile yeni lokasyonuna taşıyoruz.",
      features: ["IT ekipman taşıma", "Dosya arşiv taşıma", "Hafta sonu hizmeti"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
    {
      id: 'depolama',
      icon: Package,
      title: "Eşya Depolama",
      description: "Güvenli depolarımızda eşyalarınızı istediğiniz süre saklayabilirsiniz.",
      features: ["Güvenli depo", "Klima kontrollü", "24/7 güvenlik"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
    {
      id: 'sigorta',
      icon: Shield,
      title: "Sigortalı Taşımacılık",
      description: "Tüm eşyalarınız nakliyat sigortası kapsamında güvence altında.",
      features: ["Tam kapsamlı sigorta", "Hasar tazminatı", "Anında değerlendirme"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
    {
      id: 'sehirlerarasi',
      icon: Truck,
      title: "Şehirlerarası Nakliyat",
      description: "Türkiye'nin her yerine güvenli ve hızlı nakliyat hizmeti.",
      features: ["Kapıdan kapıya", "Takip sistemi", "Ekspres teslimat"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
    {
      id: 'acil',
      icon: Clock,
      title: "Acil Nakliyat",
      description: "Acil durumlarınızda 24 saat içinde nakliyat hizmeti sağlıyoruz.",
      features: ["24/7 hizmet", "Hızlı mobilizasyon", "Öncelikli işlem"],
      price: "Hemen iletişime geçin",
      link: "https://wa.me/905443298983",
    },
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "14 yıllık sektör tecrübesi ile uzman kadromuz"
    },
    {
      icon: Shield,
      title: "Tam Sigorta",
      description: "Tüm eşyalarınız nakliyat sigortası kapsamında"
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "Müşteri memnuniyeti odaklı hizmet anlayışı"
    },
    {
      icon: Zap,
      title: "Hızlı Hizmet",
      description: "Aynı gün içinde nakliyat hizmeti"
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Hemen arayın, ücretsiz teklif alın",
      contact: "0282 726 48 86",
      action: "Ara",
      href: "tel:+902827264886",
      color: "bg-[#7C0A02] hover:bg-[#5A0701]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "WhatsApp'tan mesaj gönderin",
      contact: "0544 329 89 83",
      action: "Mesaj Gönder",
      href: "https://wa.me/905443298983",
      color: "bg-[#B01505] hover:bg-[#9A0F03]",
    },
  ]

  const workingHours = [
    { day: "Pazartesi - Pazar", hours: "24 saat açık" },
  ]

  const addresses = [
    {
      title: "Ana Ofis - Çerkezköy",
      address: "Çalışkan Apartmanı, Gazi Mustafa Kemalpaşa, Kahraman Sk. No:6A, 59500 Çerkezköy/Tekirdağ",
      phone: "(0282) 726 48 86",
      mapLink: "https://maps.google.com/maps?q=Çerkezköy+Birlik+Evden+Eve+Nakliyat"
    }
  ]

  return (
    <>
      <Head>
        <title>Çerkezköy Birlik Evden Eve Nakliyat - Güvenilir Taşımacılık</title>
        <meta
          name="description"
          content="Çerkezköy ve çevresinde güvenilir evden eve nakliyat hizmeti. Profesyonel ekip, uygun fiyat, sigortalı taşımacılık."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Eşyalarınızı Güvenle Taşıyoruz
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  14 yıllık tecrübemiz ve profesyonel ekibimizle evden eve, ofisten ofise nakliyat hizmetlerinde
                  yanınızdayız. Sigortalı ve güvenli taşımacılık garantisi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+902827264886" 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Ara
                  </a>
                  <a 
                    href="https://wa.me/905443298983" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right Content - Photo */}
              <div>
                <img
                  src="/arac.jpg"
                  alt="Profesyonel nakliyat ekibi"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Hemen Teklif Alın
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                Ücretsiz keşif ve teklif için hemen iletişime geçin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+902827264886"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0282 726 48 86
                </a>
                <a
                  href="https://wa.me/905443298983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  0544 329 89 83
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Hizmetlerimiz</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Her türlü nakliyat ihtiyacınız için profesyonel hizmet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-gray-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Neden Bizi Seçmelisiniz?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                14 yıllık tecrübemiz ve müşteri memnuniyeti odaklı hizmet anlayışımızla fark yaratıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact & Addresses Section */}
        <section id="contact" className="section-padding bg-gradient-to-br from-[#7C0A02] to-[#B01505] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">İletişim ve Adreslerimiz</h2>
                <p className="text-xl text-[#F5E6E5] max-w-3xl mx-auto">
                  Çerkezköy Birlik Nakliyat'a ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* İletişim Yöntemleri */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-8">İletişim Yöntemlerimiz</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-center space-y-4 lg:space-y-6">
                          {/* Icon */}
                          <div className="bg-white/20 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-colors">
                            <method.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                          </div>

                          {/* Content */}
                          <div className="space-y-2 lg:space-y-3">
                            <h4 className="text-lg lg:text-xl font-semibold">{method.title}</h4>
                            <p className="text-[#F5E6E5] text-xs lg:text-sm leading-relaxed">{method.description}</p>
                            <p className="font-bold text-base lg:text-lg">{method.contact}</p>
                          </div>

                          {/* Action Button */}
                          <a
                            href={method.href}
                            className={`inline-flex items-center justify-center w-full py-3 lg:py-4 px-4 lg:px-6 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base ${method.color}`}
                          >
                            {method.action}
                            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold">Çalışma Saatleri</h4>
                    </div>
                    <div className="space-y-4">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                          <span className="text-[#F5E6E5] font-medium">{schedule.day}</span>
                          <span className="font-bold text-lg text-[#F5E6E5]">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Business Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Google İşletmemiz</h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        <Star className="w-8 h-8 text-yellow-400" />
                      </div>
                      <h4 className="text-2xl font-bold">Çerkezköy Birlik Evden Eve Nakliyat</h4>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-yellow-400 text-3xl mr-3">⭐⭐⭐⭐⭐</span>
                      <span className="text-white font-bold text-xl">20+ Yorum</span>
                    </div>
                    <p className="text-[#F5E6E5] mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                      Google İşletmemizi ziyaret ederek 20+ müşteri yorumumuzu okuyabilir, fotoğraflarımızı görebilir ve 
                      doğrudan iletişime geçebilirsiniz.
                    </p>
                    <a
                      href="https://share.google/V2t6zPjVaqTtrUSKN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-[#7C0A02] hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                    >
                      Google İşletmemizi Ziyaret Et
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Addresses Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Adreslerimiz</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8">
                  {addresses.map((address, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold">{address.title}</h4>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <p className="text-[#F5E6E5] leading-relaxed mb-6 text-lg">
                            {address.address}
                          </p>
                          <div className="space-y-3 mb-6">
                            <p className="text-white font-bold text-lg flex items-center">
                              <Phone className="w-5 h-5 mr-3 text-[#F5E6E5]" />
                              {address.phone}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-end">
                          <a
                            href={address.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white text-[#7C0A02] hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full justify-center"
                          >
                            Haritada Görüntüle
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact & Bottom CTA - 2x2 on mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 mb-16">
                <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-4 lg:p-8 text-center hover:bg-red-500/25 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-red-500/30 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-8 h-8 text-red-200" />
                    </div>
                    <h3 className="text-3xl font-bold">Acil Durum Hattı</h3>
                  </div>
                  <p className="text-[#F5E6E5] mb-8 text-lg">Acil nakliyat ihtiyaçlarınız için 7/24 ulaşabileceğiniz özel hattımız</p>
                  <a
                    href="tel:+902827264886"
                    className="inline-flex items-center bg-[#7C0A02] hover:bg-[#5A0701] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    (0282) 726 48 86
                  </a>
                </div>

                {/* Bottom CTA */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ücretsiz Keşif ve Teklif</h3>
                  <p className="text-[#F5E6E5] mb-8 text-lg">Hemen iletişime geçin, size en uygun nakliyat çözümünü sunalım</p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="tel:+902827264886"
                      className="bg-white text-[#7C0A02] hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Hemen Ara
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                    <a
                      href="https://wa.me/905443298983"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#7C0A02] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp'tan Yaz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
              </Layout>

        {/* Floating Contact Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/905443298983"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors"
              title="WhatsApp'tan Mesaj Gönder"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            
            <a
              href="tel:+902827264886"
              className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-colors"
              title="Hemen Ara"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </>
    )
  }
