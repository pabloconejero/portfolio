import config from '@payload-config'
import { getPayload } from 'payload'

const IconGithub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.005 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const IconExternalLink = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default async function Projects() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'projects',
    limit: 50,
    sort: 'order',
  })

  if (docs.length === 0) return null

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">// 03 — Projects</p>
        <h2 className="section-title reveal">Things I&apos;ve built</h2>

        <div className="projects-grid">
          {docs.map((project) => (
            <div key={project.id} className="project-card reveal">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="project-link"
                      title="Live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span key={t.id ?? t.tag} className="project-tag">
                      {t.tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
