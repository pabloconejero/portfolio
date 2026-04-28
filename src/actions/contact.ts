'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export interface ContactFormState {
  success: boolean
  error?: string
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get('name') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim()
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-submissions',
      data: { name, email, message },
    })

    return { success: true }
  } catch {
    return { success: false, error: 'Something went wrong. Please try again later.' }
  }
}
