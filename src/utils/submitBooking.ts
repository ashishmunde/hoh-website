export interface BookingPayload {
  branch: string
  name: string
  phone: string
  service?: string
}

export interface BookingResult {
  ok: boolean
  message: string
}

/**
 * Booking submit stub — form UI only for now.
 * Wire to Google Sheets / Calendar / Apps Script later.
 */
export async function submitBooking(_payload: BookingPayload): Promise<BookingResult> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return {
    ok: true,
    message:
      'Thanks! Online booking is coming soon. Please call us or message on WhatsApp to confirm your appointment.',
  }
}
