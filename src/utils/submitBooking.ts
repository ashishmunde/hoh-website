export interface BookingPayload {
  branch: string
  name: string
  phone: string
}

export interface BookingResult {
  ok: boolean
  message: string
}

/** House of Hair appointment Google Form */
const FORM_URL =
  (import.meta.env.VITE_BOOKING_FORM_URL as string | undefined) ||
  'https://docs.google.com/forms/d/e/1FAIpQLScED0hHfPVBsVHUBxO66pTXJcSYwgb7qTuzPMACWQGbPkibFg/formResponse'

const ENTRY_BRANCH =
  (import.meta.env.VITE_BOOKING_ENTRY_BRANCH as string | undefined) || 'entry.1672591005'
const ENTRY_NAME =
  (import.meta.env.VITE_BOOKING_ENTRY_NAME as string | undefined) || 'entry.2010279491'
const ENTRY_PHONE =
  (import.meta.env.VITE_BOOKING_ENTRY_PHONE as string | undefined) || 'entry.820777496'

/**
 * Posts booking details to the Google Form.
 * Google Forms does not send CORS headers, so this uses no-cors.
 */
export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
  try {
    const body = new URLSearchParams()
    body.set(ENTRY_BRANCH, payload.branch)
    body.set(ENTRY_NAME, payload.name)
    body.set(ENTRY_PHONE, payload.phone)

    await fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    return {
      ok: true,
      message: 'Thanks! We have received your request and will confirm your appointment shortly.',
    }
  } catch {
    return {
      ok: false,
      message: 'Something went wrong. Please call us or message on WhatsApp.',
    }
  }
}
