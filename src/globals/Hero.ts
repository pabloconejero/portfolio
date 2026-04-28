import type { GlobalConfig } from 'payload'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  admin: {
    group: 'Portfolio Sections',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'greeting',
      type: 'text',
      defaultValue: '// Hello, world',
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
      defaultValue: 'Pablo',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      defaultValue: 'Conejero',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      defaultValue: 'Software Engineer',
    },
    {
      name: 'ctaWork',
      type: 'text',
      defaultValue: 'See my work',
    },
    {
      name: 'ctaContact',
      type: 'text',
      defaultValue: 'Get in touch',
    },
    {
      name: 'scrollLabel',
      type: 'text',
      defaultValue: 'Scroll',
    },
  ],
}
