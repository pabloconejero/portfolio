import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Experience() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'experience',
    limit: 50,
    sort: '-isCurrent,order',
  })

  if (docs.length === 0) return null

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">// 04 — Experience</p>
        <h2 className="section-title reveal">Where I&apos;ve worked</h2>

        <div className="timeline reveal">
          {docs.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />
              <p className="timeline-date">{item.dateRange}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">
                {item.company}
                {item.employmentType ? ` · ${item.employmentType}` : ''}
              </p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="timeline-desc">
                  {item.bullets.map((b) => (
                    <li key={b.id ?? b.text}>{b.text}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
