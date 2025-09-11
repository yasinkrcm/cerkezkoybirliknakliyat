/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/biz-kimiz',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sss',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hizmetlerimiz',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hakkimizda',
        destination: '/',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/fiyatlar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/galeri',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/urunler',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kategori',
        destination: '/',
        permanent: true,
      },
      {
        source: '/arama',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
