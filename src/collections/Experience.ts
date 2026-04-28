import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'dateRange', 'isCurrent'],
  },
  defaultSort: '-isCurrent,order',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'employmentType',
      type: 'text',
      admin: { description: 'e.g. Full-time, Part-time, Internship, Contract' },
    },
    {
      name: 'dateRange',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 2023 — Present' },
    },
    {
      name: 'isCurrent',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Current position — displayed at the top of the timeline' },
    },
    {
      name: 'bullets',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Lower numbers appear first (after current positions)' },
    },
  ],
}
