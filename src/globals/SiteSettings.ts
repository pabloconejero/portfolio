import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Portfolio Sections',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'contactIntro',
      type: 'textarea',
      admin: {
        description: 'Intro paragraph shown above the contact form',
      },
      defaultValue:
        "Whether you have a project in mind, a job opportunity, or just want to say hi — my inbox is always open. I'll get back to you as soon as possible.",
    },
    {
      type: 'group',
      name: 'social',
      label: 'Social Links',
      fields: [
        {
          name: 'github',
          type: 'text',
          admin: { description: 'GitHub profile URL' },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: { description: 'LinkedIn profile URL' },
        },
        {
          name: 'email',
          type: 'email',
          admin: { description: 'Contact email address' },
        },
      ],
    },
    {
      type: 'group',
      name: 'footer',
      label: 'Footer',
      fields: [
        {
          name: 'name',
          type: 'text',
          defaultValue: 'Pablo Conejero Soriano',
        },
        {
          name: 'year',
          type: 'text',
          defaultValue: '2026',
        },
      ],
    },
  ],
}
