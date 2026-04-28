export const dynamic = 'force-dynamic'

import config from '@payload-config'
import { getPayload } from 'payload'

import About from '@/components/About'
import ContactSection from '@/components/ContactSection'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import ScrollReveal from '@/components/ScrollReveal'
import Skills from '@/components/Skills'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactSection intro={settings.contactIntro} social={settings.social} />
      <Footer />
      <ScrollReveal />
    </>
  )
}
