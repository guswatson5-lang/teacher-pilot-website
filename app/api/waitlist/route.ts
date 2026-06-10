import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitiseEmail(raw: string): string | null {
  const trimmed = raw.trim().toLowerCase().slice(0, 254)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
  return emailRegex.test(trimmed) ? trimmed : null
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const raw = (body as Record<string, unknown>)?.email
  if (typeof raw !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const email = sanitiseEmail(raw)
  if (!email) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const { error: dbError } = await supabase
    .from('waitlist_emails')
    .insert({ email })

  if (dbError) {
    if (dbError.code === '23505') {
      // Unique violation — already signed up; treat as success to avoid enumeration
      return NextResponse.json({ success: true })
    }
    console.error('Waitlist DB error:', dbError)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'teacherpilotau@gmail.com',
      subject: 'New waitlist signup',
      html: `<p>Email: <strong>${email}</strong> joined the waitlist.</p>`,
    })
  } catch (err) {
    // Non-fatal — DB insert succeeded
    console.error('Resend error:', err)
  }

  return NextResponse.json({ success: true })
}
