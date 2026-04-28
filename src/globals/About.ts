import type { GlobalConfig } from 'payload'

export const AboutGlobal: GlobalConfig = {
  slug: 'about',
  admin: {
    group: 'Portfolio Sections',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'bio',
      type: 'richText',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      maxRows: 3,
      admin: {
        description: 'Up to 3 stat cards displayed below the bio',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. 3+, 12, ∞' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g. Years exp., Projects, Curiosity' },
        },
      ],
    },
  ],
}
