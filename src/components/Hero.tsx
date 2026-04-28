import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Hero() {
  const payload = await getPayload({ config })
  const hero = await payload.findGlobal({ slug: 'hero' })

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          {hero.greeting && <p className="hero-greeting">{hero.greeting}</p>}
          <h1 className="hero-name">
            {hero.firstName}
            <br />
            {hero.lastName} <span>.</span>
          </h1>
          <p className="hero-role">{hero.role}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              {hero.ctaWork ?? 'See my work'}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {hero.ctaContact ?? 'Get in touch'}
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-hint-line" />
        <span>{hero.scrollLabel ?? 'Scroll'}</span>
      </div>
    </section>
  )
}
