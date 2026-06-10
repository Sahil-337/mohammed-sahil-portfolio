import { track } from '@vercel/analytics'

// Thin wrapper: fires custom events on Vercel, silently no-ops locally.
// Events show up in the Vercel Analytics dashboard (private to the site owner).
export function trackEvent(name, props = {}) {
  try {
    track(name, props)
  } catch {
    // analytics unavailable (local dev, blocked, etc.) — never break the UI
  }
}

// Standard event names used across the site
export const EVENTS = {
  RESUME_DOWNLOAD: 'resume_download',
  EMAIL_CLICK: 'email_click',
  PHONE_CLICK: 'phone_click',
  LINKEDIN_CLICK: 'linkedin_click',
  GITHUB_CLICK: 'github_click',
  ASSISTANT_OPEN: 'assistant_open',
  ASSISTANT_QUESTION: 'assistant_question',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PROJECT_DETAIL_OPEN: 'project_detail_open',
}
