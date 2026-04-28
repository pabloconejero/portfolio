import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { ContactSubmissions } from './collections/ContactSubmissions'
import { Experience } from './collections/Experience'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Skills } from './collections/Skills'
import { Users } from './collections/Users'
import { AboutGlobal } from './globals/About'
import { HeroGlobal } from './globals/Hero'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Skills, Projects, Experience, ContactSubmissions],
  globals: [HeroGlobal, AboutGlobal, SiteSettings],
  editor: lexicalEditor(),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM ?? 'noreply@localhost',
    defaultFromName: 'Portfolio',
    transport: nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp',
      port: Number(process.env.SMTP_PORT ?? 25),
      secure: false,
    }),
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./portfolio-v2.db',
    },
  }),
  sharp,
  plugins: [],
})
