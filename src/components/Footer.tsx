import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Footer() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const name = settings.footer?.name ?? 'Pablo Conejero Soriano'
  const year = settings.footer?.year ?? String(new Date().getFullYear())

  return (
    <footer>
      <div className="container">
        <p>
          Designed &amp; built by <span>{name}</span> · <span>{year}</span>
        </p>
      </div>
    </footer>
  )
}
