import  Layout  from '@/components/layout/layout'
import  Hero  from '@/components/sections/Hero'
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
  )
}