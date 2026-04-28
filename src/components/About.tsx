import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'

export default async function About() {
  const payload = await getPayload({ config })
  const about = await payload.findGlobal({ slug: 'about' })

  return (
    <section id="about">
      <div className="container">
        <p className="section-label reveal">// 01 — About</p>
        <h2 className="section-title reveal">Who I am</h2>

        {about.bio && (
          <div className="about-text reveal">
            <RichText data={about.bio} />
          </div>
        )}

        {about.stats && about.stats.length > 0 && (
          <div className="about-stats reveal">
            {about.stats.map((stat) => (
              <div key={stat.id ?? stat.label} className="stat">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
