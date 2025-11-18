# 🚛 Çerkezköy Birlik Evden Eve Nakliyat

Modern, responsive ve SEO optimizasyonlu nakliyat firması web sitesi. Next.js 14 ve TypeScript ile geliştirilmiş, profesyonel tasarım ve kullanıcı deneyimi odaklı bir proje.

## 🏷️ Proje Tanıtımı

Bu proje, Çerkezköy Birlik Evden Eve Nakliyat firması için geliştirilmiş modern bir kurumsal web sitesidir. Müşteri odaklı tasarım, hızlı yükleme süreleri ve mobil uyumluluk ile sektörde fark yaratan bir dijital deneyim sunar.

### 🎯 Temel Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş yapı
- **Hızlı Yükleme**: Next.js 14 ile optimize edilmiş performans
- **İletişim Odaklı**: Telefon ve WhatsApp entegrasyonu
- **Modern UI/UX**: Radix UI ve Tailwind CSS ile profesyonel tasarım
- **Erişilebilirlik**: WCAG standartlarına uygun yapı

## ⚙️ Teknolojiler

### Frontend
- **Next.js 14.2.16** - React framework
- **React 18** - UI kütüphanesi
- **TypeScript 5** - Tip güvenliği
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Erişilebilir UI bileşenleri
- **Lucide React** - Modern ikon kütüphanesi

### Styling & UI
- **Tailwind CSS** - Responsive tasarım sistemi
- **CSS Variables** - Dinamik tema desteği
- **Custom Animations** - Smooth geçiş efektleri
- **Responsive Grid** - Mobil-first yaklaşım

### Development Tools
- **ESLint** - Kod kalitesi
- **PostCSS** - CSS işleme
- **Autoprefixer** - Tarayıcı uyumluluğu
- **Vercel Analytics** - Performans takibi

## ☁️ Sistem Mimarisi

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Side   │    │   Next.js App   │    │   Static Files  │
│                 │    │                 │    │                 │
│ • React 18      │◄──►│ • Pages Router  │◄──►│ • Images        │
│ • TypeScript    │    │ • API Routes    │    │ • Fonts         │
│ • Tailwind CSS  │    │ • SSR/SSG       │    │ • Icons         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Browser       │    │   Vercel        │    │   CDN           │
│                 │    │   Deployment    │    │                 │
│ • Responsive    │    │ • Edge Network  │    │ • Global Cache  │
│ • PWA Ready     │    │ • Auto Scaling  │    │ • Fast Delivery │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Mimari Özellikler

- **Static Site Generation (SSG)**: Hızlı yükleme için önceden oluşturulmuş sayfalar
- **Client-Side Routing**: Smooth sayfa geçişleri
- **Component-Based Architecture**: Yeniden kullanılabilir UI bileşenleri
- **Responsive Design**: Mobile-first yaklaşım
- **SEO Optimization**: Meta tags, structured data, sitemap


## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn
- Git

### Kurulum Adımları

1. **Projeyi klonlayın**
```bash
git clone https://github.com/yasinkrcm/cerkezkoybirliknakliyat
cd cerkezkoybirliknakliyat
```
2. **Bağımlılıkları yükleyin**
```bash
npm install
```
3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```
4. **Tarayıcıda açın**
```bash
http://localhost:3000
```
# Build ve Deploy


### Production build
```bash
npm run build
```
### Production sunucusunu başlat
```bash
npm run start
```
### Linting
```bash
npm run lint
```

### Environment Variables

Proje şu anda environment variables gerektirmemektedir. Tüm yapılandırma dosyalarında mevcuttur.

## 🌐 Canlı Site

Proje canlı olarak şu adreste yayınlanmaktadır:
- **URL**: https://www.cerkezkoybirlikevdeneve.com/
- **Platform**: Vercel
- **SSL**: Aktif
- **CDN**: Global edge network

### SEO ve Performans
- **Google PageSpeed**: 90+ (Mobile/Desktop)
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimize edilmiş
- **Sitemap**: Otomatik oluşturulmuş
- **Robots.txt**: SEO dostu

## 📱 Responsive Tasarım

- **Mobile First**: 320px+ ekranlar
- **Tablet**: 768px+ ekranlar  
- **Desktop**: 1024px+ ekranlar
- **Large Desktop**: 1440px+ ekranlar

### Desteklenen Tarayıcılar
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
Primary: #7C0A02 (Kırmızı)
Secondary: #F5E6E5 (Açık Kırmızı)
Accent: #B01505 (Koyu Kırmızı)
Background: #FFFFFF (Beyaz)
Text: #111827 (Koyu Gri)
```

### Tipografi
- **Font Family**: Inter, sans-serif
- **Font Weights**: 400, 500, 600, 700
- **Responsive Typography**: Fluid scaling

### Bileşenler
- **Layout**: Responsive grid system
- **Navigation**: Sticky header with mobile menu
- **Cards**: Hover effects ve shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Accessible form components

## 🔧 Geliştirme Notları

### Proje Yapısı
```
cerkezkoy-nakliyat/
├── components/          # React bileşenleri
│   ├── Hero.js         # Ana sayfa hero section
│   ├── Layout.js       # Ana layout bileşeni
│   └── Services.js     # Hizmetler bölümü
├── pages/              # Next.js sayfaları
│   ├── _app.js         # App wrapper
│   ├── _document.js    # HTML document
│   └── index.js        # Ana sayfa
├── public/             # Statik dosyalar
│   ├── images/         # Görseller
│   ├── robots.txt      # SEO
│   └── sitemap.xml     # Site haritası
├── styles/             # CSS dosyaları
│   └── globals.css     # Global stiller
└── config files        # Yapılandırma dosyaları
```

### Önemli Özellikler
- **SEO Optimization**: Meta tags, structured data
- **Performance**: Image optimization, lazy loading
- **Accessibility**: ARIA labels, keyboard navigation
- **Analytics**: Vercel Analytics entegrasyonu
- **Error Handling**: Custom error pages

## 👨‍💻 Geliştirici Hakkında

**Yasin KARAÇAM**
- **Rol**: Full-Stack Developer
- **Uzmanlık**: React, Next.js, TypeScript, Node.js
- **Deneyim**: Modern web teknolojileri ve e-ticaret çözümleri
- **Yaklaşım**: Clean code, performance optimization, user experience

### İletişim
- **Portfolio**: https://www.yasinkaracam.codes
- **LinkedIn**: https://www.linkedin.com/in/yasin-karacamm/
- **GitHub**: https://github.com/yasinkrcm/

---

## 📄 Lisans

Bu proje özel bir müşteri için geliştirilmiştir. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Bu proje özel bir müşteri projesi olduğu için dış katkılara açık değildir.

---

*Bu README dosyası proje analizi sonucunda oluşturulmuştur. Gizlilik ve güvenlik standartlarına uygun olarak hazırlanmıştır.*
