import  Layout  from '@/components/layout/layout'
import  Hero  from '@/components/sections/Hero'
import Head from "next/head";
import Services  from '@/components/sections/Services'
// import Projects  from '@/components/sections/Projects'
import  About from '@/components/sections/About'
// import  Blog from '@/components/sections/Blog'
// import  Contact from '@/components/sections/Contact'
import Testimonials from '@/components/sections/Testemonial'
import GetInTouch from '@/components/sections/GetInTouch'
import AssociatedPartnersAndTrust from '@/components/sections/AssociatedPartners'

export default function Home() {
  return (
    <>
    <Head>
    <title>Socialisthan - Empowering Digital Strategies</title>
    <meta
      name="description"
      content="Socialisthan provides cutting-edge digital marketing strategies to elevate your brand."
    />
    <meta
      name="keywords"
      content="digital marketing, social media marketing, SEO, branding, social media management, video production, graphic design"
    />
    <meta name="author" content="Socialisthan Team" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Socialisthan - Empowering Digital Strategies" />
    <meta
      property="og:description"
      content="Innovative digital marketing strategies to help your brand thrive."
    />
    <meta property="og:image" content="https://yourdomain.com/path/to/image.jpg" />
    <meta property="og:url" content="https://yourdomain.com" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
    <Layout>
      <Hero />
      <AssociatedPartnersAndTrust/>
      <Services />
      <About />
      <Testimonials />
      <GetInTouch />
      {/* <Blog /> */}

      {/* <Contact /> */}
    </Layout>
    </>
  )
}