'use client'

import { useActionState } from 'react'
import { submitContact } from '@/actions/contact'

interface SocialLinks {
  github?: string | null
  linkedin?: string | null
  email?: string | null
}

interface Props {
  intro?: string | null
  social?: SocialLinks | null
}

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.005 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)

const IconEmail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

export default function ContactSection({ intro, social }: Props) {
  const [state, action, pending] = useActionState(submitContact, { success: false })

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label reveal">// 05 — Contact</p>
        <h2 className="section-title reveal">Let&apos;s talk</h2>

        <div className="contact-grid">
          {intro && <p className="contact-intro reveal">{intro}</p>}

          {state.success ? (
            <div className="form-success">Message sent! I&apos;ll get back to you soon.</div>
          ) : (
            <form className="contact-form reveal" action={action}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={pending}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    disabled={pending}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  required
                  disabled={pending}
                />
              </div>
              {state.error && <p className="form-error">{state.error}</p>}
              <button type="submit" className="form-submit" disabled={pending}>
                {pending ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}

          {social && (
            <div className="social-bar reveal">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <IconGithub />
                  GitHub
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <IconLinkedIn />
                  LinkedIn
                </a>
              )}
              {social.email && (
                <a href={`mailto:${social.email}`} className="social-link">
                  <IconEmail />
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
