import Head from "next/head"
import Layout from "../components/Layout"
import { Shield, Eye, Lock, FileText, Users, Phone } from "lucide-react"

export default function KVKK() {
  const sections = [
    {
      icon: FileText,
      title: "Kişisel Verilerin Toplanması",
      content: [
        "Çerkezköy Birlik Nakliyat olarak, hizmet kalitemizi artırmak ve yasal yükümlülüklerimizi yerine getirmek amacıyla kişisel verilerinizi topluyoruz.",
        "Toplanan veriler: Ad-soyad, telefon numarası, e-posta adresi, adres bilgileri, nakliyat tercihleri.",
        "Veriler, hizmet sözleşmesi kurulması, müşteri hizmetleri, faturalandırma ve yasal yükümlülükler için kullanılır.",
      ],
    },
    {
      icon: Lock,
      title: "Verilerin İşlenme Amaçları",
      content: [
        "Nakliyat hizmeti sunmak ve sözleşme yükümlülüklerini yerine getirmek",
        "Müşteri memnuniyetini ölçmek ve hizmet kalitesini artırmak",
        "Yasal yükümlülükleri yerine getirmek ve denetim süreçlerini yürütmek",
        "İstatistiksel analiz yapmak ve iş geliştirme faaliyetleri yürütmek",
      ],
    },
    {
      icon: Shield,
      title: "Verilerin Korunması",
      content: [
        "Kişisel verileriniz, teknik ve idari güvenlik önlemleri ile korunmaktadır.",
        "Veriler, şifreli sistemlerde saklanır ve yetkisiz erişimlere karşı korunur.",
        "Çalışanlarımız, veri gizliliği konusunda düzenli olarak eğitilmektedir.",
        "Veri güvenliği sürekli olarak izlenir ve güncel tutulur.",
      ],
    },
    {
      icon: Users,
      title: "Verilerin Paylaşılması",
      content: [
        "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz.",
        "Hizmet sağlayıcılarımız (sigorta şirketleri, lojistik ortakları) ile sınırlı paylaşım yapılabilir.",
        "Tüm paylaşımlar, veri koruma sözleşmeleri çerçevesinde gerçekleştirilir.",
        "Ticari amaçlı pazarlama için verileriniz satılmaz veya kiralanmaz.",
      ],
    },
    {
      icon: Eye,
      title: "Veri Sahibi Hakları",
      content: [
        "Kişisel verilerinizin işlenip işlenmediğini öğrenme hakkı",
        "İşlenen verileriniz hakkında bilgi talep etme hakkı",
        "Verilerin düzeltilmesini veya silinmesini talep etme hakkı",
        "Veri işlemeye itiraz etme ve şikayette bulunma hakkı",
      ],
    },
    {
      icon: Phone,
      title: "İletişim ve Başvuru",
      content: [
        "KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
        "Başvurularınızı yazılı olarak veya kayıtlı elektronik posta ile yapabilirsiniz.",
        "Başvurularınız en geç 30 gün içinde değerlendirilir ve sonuçlandırılır.",
        "İletişim: kvkk@cerkezkoynamkliyat.com",
      ],
    },
  ]

  const contactInfo = {
    company: "Çerkezköy Birlik Evden Eve Nakliyat",
    address: "Atatürk Mah. Cumhuriyet Cad. No:123 Çerkezköy/Tekirdağ",
    phone: "0282 123 45 67",
    email: "kvkk@cerkezkoynamkliyat.com",
    website: "www.cerkezkoynamkliyat.com",
  }

  return (
    <Layout
      title="KVKK - Kişisel Verilerin Korunması"
      description="Çerkezköy Birlik Nakliyat KVKK politikası ve kişisel verilerin korunması"
    >
      <Head>
        <title>KVKK - Kişisel Verilerin Korunması - Çerkezköy Birlik Nakliyat</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              KVKK
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kişisel Verilerin Korunması Politikası
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesi, korunması ve
              haklarınız hakkında detaylı bilgiler
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Giriş</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Çerkezköy Birlik Evden Eve Nakliyat olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")
                kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizin korunmasına büyük önem veriyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bu politika, kişisel verilerinizin nasıl toplandığı, işlendiği, korunduğu ve haklarınızın nasıl
                kullanabileceğiniz konularında sizi bilgilendirmek amacıyla hazırlanmıştır.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Data Retention */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Veri Saklama Süreleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Müşteri Verileri</h4>
                  <p className="text-gray-700 text-sm">Hizmet sözleşmesi süresi + 10 yıl (Vergi mevzuatı gereği)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">İletişim Verileri</h4>
                  <p className="text-gray-700 text-sm">Teklif süreci + 2 yıl</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pazarlama Verileri</h4>
                  <p className="text-gray-700 text-sm">Rıza geri alınana kadar veya maksimum 3 yıl</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Web Site Logları</h4>
                  <p className="text-gray-700 text-sm">6 ay (Güvenlik amaçlı)</p>
                </div>
              </div>
            </div>

            {/* Rights Exercise */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">Haklarınızı Nasıl Kullanabilirsiniz?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Başvuru Yöntemleri</h4>
                  <ul className="space-y-1 text-blue-100 text-sm">
                    <li>• Yazılı başvuru (Posta ile)</li>
                    <li>• Kayıtlı e-posta (KEP)</li>
                    <li>• Güvenli e-posta</li>
                    <li>• Şahsen başvuru</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Başvuru Süreci</h4>
                  <ul className="space-y-1 text-blue-100 text-sm">
                    <li>• Kimlik doğrulama</li>
                    <li>• Başvuru değerlendirme</li>
                    <li>• 30 gün içinde yanıt</li>
                    <li>• Ücretsiz işlem</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Veri Sorumlusu</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Şirket:</strong> {contactInfo.company}
                    </p>
                    <p>
                      <strong>Adres:</strong> {contactInfo.address}
                    </p>
                    <p>
                      <strong>Telefon:</strong> {contactInfo.phone}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">KVKK İletişim</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>E-posta:</strong> {contactInfo.email}
                    </p>
                    <p>
                      <strong>Web Site:</strong> {contactInfo.website}
                    </p>
                    <p>
                      <strong>Başvuru Saatleri:</strong> 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Bu politika son olarak <strong>01 Ocak 2024</strong> tarihinde güncellenmiştir.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Politikamızda yapılacak değişiklikler web sitemizde yayınlanacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
