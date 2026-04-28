import config from '@payload-config'
import { getPayload } from 'payload'
import type { Skill } from '@/payload-types'

const CATEGORY_LABELS: Record<Skill['category'], string> = {
  ecommerce: 'Ecommerce',
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  other: 'Other',
}

const CATEGORY_ORDER: Skill['category'][] = ['ecommerce', 'frontend', 'backend', 'devops', 'other']

export default async function Skills() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'skills',
    limit: 100,
    sort: 'order',
  })

  const byCategory = CATEGORY_ORDER.reduce<Record<string, Skill[]>>((acc, cat) => {
    acc[cat] = docs.filter((s) => s.category === cat)
    return acc
  }, {})

  const usedCategories = CATEGORY_ORDER.filter((cat) => byCategory[cat].length > 0)

  if (usedCategories.length === 0) return null

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label reveal">// 02 — Skills</p>
        <h2 className="section-title reveal">What I work with</h2>

        <div className="skills-categories reveal">
          {usedCategories.map((cat) => (
            <div key={cat}>
              <p className="skill-cat-label">{CATEGORY_LABELS[cat]}</p>
              <div className="skills-grid">
                {byCategory[cat].map((skill) => (
                  <span
                    key={skill.id}
                    className={`skill-tag${skill.featured ? ' featured' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
