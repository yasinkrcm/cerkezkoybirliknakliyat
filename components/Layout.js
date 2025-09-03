"use client"

import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { Menu, X, Truck, Phone, MessageCircle, MapPin } from "lucide-react"

export default function Layout({ children, title, description }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Çerkezköy Birlik Evden Eve Nakliyat` : "Çerkezköy Birlik Evden Eve Nakliyat - Güvenilir Taşımacılık"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Çerkezköy Birlik Evden Eve Nakliyat, güvenilir evden eve nakliyat hizmeti. Profesyonel ekip, uygun fiyat, sigortalı taşımacılık."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          {/* Top Bar - Contact Info */}
          <div className="bg-gray-900 text-white py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                  <a 
                    href="tel:+902827264886" 
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(0282) 726 48 86</span>
                  </a>
                  <a 
                    href="https://wa.me/905443298983" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>0544 329 89 83</span>
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Çerkezköy, Tekirdağ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="bg-white-900 p-2 rounded-lg group-hover:bg-gray-800 transition-colors">
                  <Image src="/logo.png" alt="Çerkezköy Birlik Evden Eve Nakliyat" width={100} height={100} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Çerkezköy Birlik Evden Eve</h1>
                  <p className="text-sm text-gray-600">Nakliyat</p>
                </div>
              </Link>

              {/* Desktop Contact Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="tel:+902827264886"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (0282) 726 48 86
                </a>
                <a
                  href="https://wa.me/905443298983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 py-4 border-t border-gray-100 bg-white rounded-lg shadow-lg">
                <div className="space-y-3">
                  <a
                    href="tel:+902827264886"
                    className="block bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-md font-medium text-center transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (0282) 726 48 86
                  </a>
                  <a
                    href="https://wa.me/905443298983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md font-medium text-center transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="bg-white">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Çerkezköy Birlik</h3>
                    <p className="text-sm text-gray-400">Nakliyat</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  2010 yılından beri Çerkezköy ve çevresinde güvenilir nakliyat hizmeti sunuyoruz. 
                  Profesyonel ekibimiz ve modern araç filomuzla eşyalarınızı güvenle taşıyoruz.
                </p>
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
                  <a 
                    href="tel:+902827264886"
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-3 text-gray-500" />
                    <span>(0282) 726 48 86</span>
                  </a>
                  <a 
                    href="https://wa.me/905443298983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-3 text-green-500" />
                    <span>0544 329 89 83</span>
                  </a>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-3 mt-1 text-gray-500" />
                    <span className="text-sm">
                      Çalışkan Apartmanı, Gazi Mustafa Kemalpaşa Mahallesi, <br />
                      Kahraman Sk. no:6A, 59500 Çerkezköy/Tekirdağ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">© 2025 Çerkezköy Birlik Evden Eve Nakliyat. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
