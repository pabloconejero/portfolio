# Claude Code
PayloadCMS app (Next.JS) for showcasing my projects and jobs to the world

This project uses the Payload CMS skill at `.claude/skills/payload/`.
Start with `.claude/skills/payload/SKILL.md` for a quick reference, then see `.claude/skills/payload/reference/` for detailed docs.

## Architecture
- `/src/i18n`- translation files,
- `/src/hooks` - custom hooks
- `/src/components` - resuable ui components
- `/src/store`- Zustand stores (if needed)

## Rules
- website is based on performance and reliability, development needs to be performance first.
- Screens only compose components, no inline logic
- App logic lives in `/src/hooks` or separate util files,
- A tsconfig rule should be created and respected so everytime a file from inside src will be called as `@/` i.e. `import {dateUtil} from '@/src/utils'`
- Every user-facing string must use i18n keys.
- Do not add co-author or self-reference lines to commit messages.
