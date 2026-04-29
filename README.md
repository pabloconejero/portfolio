# Portfolio v2

A personal portfolio website powered by **Next.js 16** and **Payload CMS 3** — fully self-hostable, no third-party services required.

Content is managed through a built-in admin panel (Payload), served as a static-first Next.js frontend, and deployed via Docker with a lightweight Postfix SMTP container for contact form emails.

## Features

- **CMS-driven content** — edit projects, experience, skills, and about sections without touching code
- **Self-hosted** — runs entirely on a VPS behind Nginx; no external database or cloud storage needed
- **SQLite** — zero-config database, data persisted via Docker volumes
- **Contact form** — submissions stored in the CMS and forwarded by email via Postfix
- **i18n ready** — all user-facing strings go through translation keys
- **Performance-first** — force-dynamic pages, Sharp image processing, scroll-reveal animations

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| CMS | Payload CMS 3 |
| Database | SQLite (via `@payloadcms/db-sqlite`) |
| Styling | CSS (component-scoped) |
| Email | Nodemailer + Postfix (self-hosted) |
| Deployment | Docker Compose + Nginx reverse proxy |
| Testing | Vitest (integration) · Playwright (e2e) |

## Sections

- **Hero** — headline and call-to-action
- **About** — bio and background
- **Skills** — categorized tech skills (Ecommerce, Frontend, Backend, DevOps, Other)
- **Projects** — portfolio pieces with links
- **Experience** — work history timeline
- **Contact** — form that emails you and saves submissions to the CMS

## Getting started

### Prerequisites

- Node.js `^18.20.2` or `>=20.9.0`
- pnpm `^9` or `^10`

### Local development

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-v2.git
cd portfolio-v2

cp .env.example .env        # fill in PAYLOAD_SECRET at minimum

pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:3000/admin](http://localhost:3000/admin) to create your first admin user.

### Docker (recommended for production parity)

```bash
cp .env.example .env        # set PAYLOAD_SECRET
docker compose up -d
```

The app binds to `127.0.0.1:3000` by default. Point Nginx at that port and add your SSL certificate.

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `PAYLOAD_SECRET` | Secret key for Payload (required) | — |
| `DATABASE_URL` | SQLite file path | `file:./portfolio-v2.db` |
| `SMTP_HOST` | SMTP server host | `smtp` |
| `SMTP_PORT` | SMTP server port | `25` |
| `SMTP_FROM` | Sender display name | `noreply@localhost` |
| `CONTACT_EMAIL` | Address that receives contact form emails | — |
| `APP_HOST_PORT` | Host binding for Docker | `127.0.0.1:3000` |

## Project structure

```
src/
├── app/
│   ├── (frontend)/     # Public-facing Next.js pages
│   └── (payload)/      # Payload admin panel
├── collections/        # CMS collections (Projects, Experience, Skills, …)
├── globals/            # CMS globals (Hero, About, SiteSettings)
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
└── i18n/               # Translation files
```

## Scripts

```bash
pnpm dev                  # Start dev server
pnpm build                # Production build
pnpm start                # Serve production build
pnpm lint                 # ESLint
pnpm test                 # Run all tests (integration + e2e)
pnpm test:int             # Vitest integration tests
pnpm test:e2e             # Playwright e2e tests
pnpm generate:types       # Regenerate Payload TypeScript types
```

## License

MIT
