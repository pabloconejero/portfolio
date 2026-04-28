import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  defaultSort: 'order',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: { description: 'GitHub repository URL' },
    },
    {
      name: 'demoUrl',
      type: 'text',
      admin: { description: 'Live demo URL (optional)' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
