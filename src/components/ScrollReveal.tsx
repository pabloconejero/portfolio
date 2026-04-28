'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    const staggerParents = document.querySelectorAll(
      '.projects-grid, .timeline, .skills-categories',
    )
    staggerParents.forEach((parent) => {
      parent.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`
      })
    })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
