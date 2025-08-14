import Head from "next/head"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import ContactCTA from "../components/ContactCTA"

export default function Home() {
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
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactCTA />
      </Layout>
    </>
  )
}
