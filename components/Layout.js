"use client"

import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useAuth } from "../contexts/AuthContext"
import { Menu, X, Truck, Phone, Mail, MapPin, User, LogOut } from "lucide-react"

export default function Layout({ children, title, description }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetlerimiz", href: "/services" },
    { name: "Teklif Al", href: "/quote" },
    { name: "Hakkımızda", href: "/about" },
    { name: "İletişim", href: "/contact" },
  ]

  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Çerkezköy Birlik Nakliyat` : "Çerkezköy Birlik Nakliyat - Güvenilir Taşımacılık"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Çerkezköy ve çevresinde güvenilir evden eve nakliyat hizmeti. Profesyonel ekip, uygun fiyat, sigortalı taşımacılık."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          {/* Top Bar */}
          <div className="bg-blue-600 text-white py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    <span>0282 123 45 67</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    <span>info@cerkezkoynamkliyat.com</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Çerkezköy, Tekirdağ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Çerkezköy Birlik</h1>
                  <p className="text-sm text-gray-600">Evden Eve Nakliyat</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                      router.pathname === item.href ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Auth & Mobile Menu */}
              <div className="flex items-center space-x-4">
                {/* Auth Buttons */}
                <div className="hidden sm:flex items-center space-x-3">
                  {isAuthenticated ? (
                    <div className="flex items-center space-x-3">
                      <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
                        <User className="w-4 h-4 mr-1" />
                        {user?.name}
                      </Link>
                      <button onClick={handleLogout} className="flex items-center text-gray-700 hover:text-red-600">
                        <LogOut className="w-4 h-4 mr-1" />
                        Çıkış
                      </button>
                    </div>
                  ) : null}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-gray-700 hover:text-blue-600 font-medium ${
                        router.pathname === item.href ? "text-blue-600" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Auth */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    {isAuthenticated ? (
                      <>
                        <Link
                          href="/dashboard"
                          className="flex items-center text-gray-700 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="w-4 h-4 mr-2" />
                          {user?.name}
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setMobileMenuOpen(false)
                          }}
                          className="flex items-center text-gray-700 hover:text-red-600"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Çıkış Yap
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Çerkezköy Birlik</h3>
                    <p className="text-sm text-gray-400">Evden Eve Nakliyat</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  2010 yılından beri Çerkezköy ve çevresinde güvenilir nakliyat hizmeti sunuyoruz. Profesyonel ekibimiz
                  ve modern araç filomuzla eşyalarınızı güvenle taşıyoruz.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Evden Eve Nakliyat</li>
                  <li>Ofis Taşımacılığı</li>
                  <li>Eşya Depolama</li>
                  <li>Ambalajlama</li>
                  <li>Sigortalı Taşımacılık</li>
                  <li>Şehirlerarası Nakliyat</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-blue-400" />
                    <span>0282 123 45 67</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-blue-400" />
                    <span>info@cerkezkoynamkliyat.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400" />
                    <span>
                      Atatürk Mah. Cumhuriyet Cad. No:123
                      <br />
                      Çerkezköy/Tekirdağ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Çerkezköy Birlik Nakliyat. Tüm hakları saklıdır.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Gizlilik Politikası
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Kullanım Şartları
                </Link>
                <Link href="/kvkk" className="text-gray-400 hover:text-white text-sm">
                  KVKK
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
