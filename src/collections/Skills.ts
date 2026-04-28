import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'featured', 'order'],
  },
  defaultSort: 'order',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Ecommerce', value: 'ecommerce' },
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'DevOps', value: 'devops' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Featured skills are highlighted with the accent color',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first within the same category',
      },
    },
  ],
}
