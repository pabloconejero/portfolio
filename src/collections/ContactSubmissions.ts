import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'read', 'createdAt'],
    description: 'Messages submitted via the contact form',
  },
  defaultSort: '-createdAt',
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return

        const to = process.env.CONTACT_EMAIL
        if (!to) return

        try {
          await req.payload.sendEmail({
            to,
            subject: `New message from ${doc.name}`,
            html: `
              <h2>New contact form submission</h2>
              <p><strong>Name:</strong> ${doc.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${doc.email}">${doc.email}</a></p>
              <p><strong>Message:</strong></p>
              <p style="white-space:pre-wrap">${doc.message}</p>
            `,
          })
        } catch (err) {
          req.payload.logger.error({ err }, 'Failed to send contact notification email')
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'read',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Mark as read once reviewed',
      },
    },
  ],
  timestamps: true,
}
