'use client'

import { useNavScroll } from '@/hooks/useNavScroll'
import { t } from '@/i18n'

export default function Nav() {
  const scrolled = useNavScroll()

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        {t.nav.logo}
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">{t.nav.about}</a>
        </li>
        <li>
          <a href="#projects">{t.nav.projects}</a>
        </li>
        <li>
          <a href="#experience">{t.nav.experience}</a>
        </li>
        <li>
          <a href="#contact">{t.nav.contact}</a>
        </li>
      </ul>
    </nav>
  )
}
