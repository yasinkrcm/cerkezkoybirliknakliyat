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
        <title>Çerkezköy Ev Taşıma | Evden Eve Nakliyat Çerkezköy | Profesyonel Nakliyat</title>
        <meta
          name="description"
          content="Çerkezköy ev taşıma ve evden eve nakliyat çerkezköy hizmetlerinde profesyonel nakliyat çözümleri. 14 yıllık tecrübe, sigortalı taşımacılık, uygun fiyat garantisi."
        />
        <meta
          name="keywords"
          content="çerkezköy ev taşıma, evden eve nakliyat çerkezköy, profesyonel nakliyat, Çerkezköy nakliyat, Çerkezköy evden eve nakliyat, Çerkezköy taşımacılık, ev taşıma Çerkezköy, ofis taşıma Çerkezköy, sigortalı nakliyat, şehirlerarası nakliyat, acil nakliyat, eşya depolama Çerkezköy, uygun fiyat nakliyat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.cerkezkoybirlikevdeneve.com/" />
        <meta property="og:title" content="Çerkezköy Ev Taşıma | Evden Eve Nakliyat Çerkezköy | Profesyonel Nakliyat" />
        <meta property="og:description" content="Çerkezköy ev taşıma ve evden eve nakliyat çerkezköy hizmetlerinde profesyonel nakliyat çözümleri. 14 yıllık tecrübe, sigortalı taşımacılık, uygun fiyat garantisi." />
        <meta property="og:url" content="https://www.cerkezkoybirlikevdeneve.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.cerkezkoybirlikevdeneve.com/Çerkezköy Birlik.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Çerkezköy Ev Taşıma | Evden Eve Nakliyat Çerkezköy | Profesyonel Nakliyat" />
        <meta name="twitter:description" content="Çerkezköy ev taşıma ve evden eve nakliyat çerkezköy hizmetlerinde profesyonel nakliyat çözümleri. 14 yıllık tecrübe, sigortalı taşımacılık, uygun fiyat garantisi." />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* H1 – En önemli başlık */}
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Çerkezköy Birlik Evden Eve Nakliyat
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  <strong>Çerkezköy ev taşıma</strong> ve <strong>evden eve nakliyat çerkezköy</strong> hizmetlerinde uzman ekibimizle 
                  <strong> profesyonel nakliyat</strong> çözümleri sunuyoruz. Ofis taşıma, şehirlerarası nakliyat ve 
                  sigortalı taşımacılık hizmetleriyle güvenilir taşımacılık garantisi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+902827264886" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Ara
                  </a>
                  <a href="https://wa.me/905443298983" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right Content - Photo */}
              <div>
                <img
                  src="/Çerkezköy Birlik.jpg"
                  alt="Çerkezköy ev taşıma ve evden eve nakliyat çerkezköy profesyonel nakliyat ekibi"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="bg-gray-900 text-white py-8 color:rgb(49, 245, 0)">
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
                  className="bg-red-600 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
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
        <section className="py-20">
          {/* Google Business Section */}
          <div className="mb-6 bg-white text-black shadow-lg rounded-xl">
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
                      <span className="text-black font-bold text-xl">20+ Yorum</span>
                    </div>
                    <p className="text-black mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
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
                      <ArrowRight className="w-12 h-12 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
        </section>
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              {/* H2 */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <strong>Çerkezköy ev taşıma</strong> ve <strong>evden eve nakliyat çerkezköy</strong> hizmetlerinde 
                <strong> profesyonel nakliyat</strong> deneyimi. Ofis taşımacılığı, şehirlerarası taşımacılık, 
                eşya depolama ve sigortalı nakliyat hizmetleriyle güvenilir çözümler.
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
                  {/* H3 */}
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
              {/* H2 */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Neden Çerkezköy Birlik Nakliyat?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <strong>Çerkezköy ev taşıma</strong> ve <strong>evden eve nakliyat çerkezköy</strong> hizmetlerinde 14 yıllık tecrübemiz, 
                <strong> profesyonel nakliyat</strong> ekibimiz ve sigortalı taşımacılık hizmetimizle güvenilir çözümler sunuyoruz.
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
        <section id="contact" className="section-padding bg-gradient-to-br from-[#e92323] to-[#420101] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">İletişim ve Adreslerimiz</h2>
                <p className="text-xl text-[#F5E6E5] max-w-3xl mx-auto">
                  Çerkezköy Birlik Evden Eve Nakliyat'a ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
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
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
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
                       className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-lg"
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
         {/* SEO Content Section */}
         <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Çerkezköy'de Güvenilir Ev Taşıma Hizmetleri
                </h2>
                <p className="text-lg text-gray-600">
                  <strong>Evden eve nakliyat çerkezköy</strong> hizmetlerinde uzman ekibimizle yanınızdayız
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Çerkezköy Ev Taşıma Hizmetlerimiz
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Çerkezköy ev taşıma</strong> hizmetlerimizde eşyalarınızı en güvenli şekilde yeni adresinize taşıyoruz. 
                      <strong>Evden eve nakliyat çerkezköy</strong> deneyimimizle profesyonel ambalajlama, dikkatli yükleme ve 
                      güvenli teslimat garantisi sunuyoruz.
                    </p>
                    <p>
                      <strong>Profesyonel nakliyat</strong> ekibimiz, 14 yıllık sektör tecrübesi ile ev eşyalarınızın 
                      demontajından montajına kadar tüm süreçleri titizlikle yönetir. Sigortalı taşımacılık hizmetimiz 
                      ile eşyalarınız tam güvence altındadır.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Neden Profesyonel Nakliyat Tercih Etmelisiniz?
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Evden eve nakliyat çerkezköy</strong> hizmetlerinde deneyimli ekibimiz, eşyalarınızın 
                      değerini bilir ve özenle taşır. <strong>Çerkezköy ev taşıma</strong> sürecinde kullanılan 
                      profesyonel ambalaj malzemeleri ve güvenli taşıma araçları ile hasarsız teslimat garantisi.
                    </p>
                    <p>
                      <strong>Profesyonel nakliyat</strong> hizmetimiz kapsamında ücretsiz keşif, detaylı fiyat teklifi 
                      ve müşteri memnuniyeti odaklı yaklaşımımızla Çerkezköy'de güvenilir taşımacılık çözümleri sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Biz Kimiz?
                </h2>
                <p className="text-lg text-gray-600">
                  <strong>Çerkezköy ev taşıma</strong> ve <strong>evden eve nakliyat çerkezköy</strong> hizmetlerinde 14 yıllık deneyim
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                    <p className="text-gray-600">
                      <strong>Profesyonel nakliyat</strong> hizmetlerimizle müşterilerimizin eşyalarını en güvenli şekilde 
                      taşıyarak, <strong>Çerkezköy ev taşıma</strong> sektöründe kalite standartlarını yükseltmek.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                    <p className="text-gray-600">
                      <strong>Evden eve nakliyat çerkezköy</strong> hizmetlerinde Türkiye'nin en güvenilir ve 
                      müşteri memnuniyeti odaklı nakliyat firması olmak.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Güvenilirlik:</strong> 14 yıllık sektör tecrübesi</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Kalite:</strong> Profesyonel ekip ve ekipman</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Müşteri Odaklılık:</strong> %100 müşteri memnuniyeti</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Şeffaflık:</strong> Açık ve net fiyatlandırma</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Sıkça Sorulan Sorular
                </h2>
                <p className="text-lg text-gray-600">
                  <strong>Çerkezköy ev taşıma</strong> hizmetlerimiz hakkında merak ettikleriniz
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Çerkezköy ev taşıma fiyatları nasıl belirleniyor?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Evden eve nakliyat çerkezköy</strong> fiyatlarımız, taşınacak eşya miktarı, mesafe, 
                    kat sayısı ve özel gereksinimler gibi faktörlere göre belirlenir. Ücretsiz keşif ile 
                    size en uygun fiyat teklifini sunuyoruz.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Eşyalarım sigortalı mı?
                  </h3>
                  <p className="text-gray-600">
                    Evet, tüm eşyalarınız <strong>profesyonel nakliyat</strong> sigortamız kapsamında güvence altındadır. 
                    Herhangi bir hasar durumunda sigorta tazminatı sağlanır.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Taşıma süreci nasıl işliyor?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Çerkezköy ev taşıma</strong> sürecimiz: Ücretsiz keşif → Fiyat teklifi → Randevu belirleme → 
                    Profesyonel ambalajlama → Güvenli taşıma → Yeni adreste montaj şeklinde ilerler.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Hangi bölgelere hizmet veriyorsunuz?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Evden eve nakliyat çerkezköy</strong> hizmetlerimiz Çerkezköy merkez olmak üzere, 
                    Tekirdağ, İstanbul ve çevre illere kadar geniş bir coğrafyada sunulmaktadır.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Acil taşıma hizmeti veriyor musunuz?
                  </h3>
                  <p className="text-gray-600">
                    Evet, 7/24 acil <strong>profesyonel nakliyat</strong> hizmeti sunuyoruz. Acil durumlarınızda 
                    hemen arayarak hızlı çözüm sağlayabiliriz.
                  </p>
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
