import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Hero } from '../components/sections/Hero'
import { Newsletter } from '../components/sections/Newsletter'
import { Section } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import {
  ArrowRightIcon,
  MailIcon,
  PartnerIcon,
  PhoneIcon,
} from '../components/icons/Icons'

interface ContactDetail {
  Icon: (props: { className?: string }) => ReactNode
  label: string
  value: string
  href: string
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'info@aitrixlabs.com',
    href: 'mailto:info@aitrixlabs.com',
  },
  {
    Icon: PhoneIcon,
    label: 'Sales',
    value: 'Schedule a call',
    href: 'mailto:info@aitrixlabs.com?subject=Schedule a sales call',
  },
  {
    Icon: PartnerIcon,
    label: 'Partnerships',
    value: 'Become a partner',
    href: 'mailto:info@aitrixlabs.com?subject=Partnership inquiry',
  },
]

const TOPICS = [
  'Product demo',
  'Sales / pricing',
  'Implementation',
  'Partnership',
  'Research collaboration',
  'Press / media',
  'Other',
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    topic: TOPICS[0],
    message: '',
  })

  const update =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Hero
        compact
        title="Let's build something with AI"
        subtitle="Tell us about your institution and what you'd like to ship. We'll get back within one business day."
      />
      <Section className="border-t border-ink-900 bg-black">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-ink-900 bg-ink-950 p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Asha Sharma"
                />
                <Field
                  label="Work email"
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@institution.edu.np"
                />
                <Field
                  label="Institution"
                  value={form.institution}
                  onChange={update('institution')}
                  placeholder="Aitrix Academy"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <Label>Topic</Label>
                  <select
                    value={form.topic}
                    onChange={update('topic')}
                    className="w-full rounded border border-ink-800 bg-black px-3 py-2.5 text-sm text-white focus:border-primary focus:outline-none"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Message</Label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="What problem are you trying to solve?"
                    className="w-full resize-y rounded border border-ink-800 bg-black px-3 py-2.5 text-sm text-white placeholder:text-ink-700 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-ink-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-pill transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitted ? 'Message sent' : 'Send message'}
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-white">Other ways to reach us</h3>
              <p className="mb-4 text-sm leading-[1.7] text-ink-400">
                Prefer something quicker? Pick whatever channel works best — we're a small team and
                we read every message.
              </p>
              <div className="flex flex-col gap-2.5">
                {CONTACT_DETAILS.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="group flex items-center gap-4 rounded-lg border border-ink-900 bg-ink-950 p-4 transition-colors hover:border-ink-700"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-800 text-primary">
                      <d.Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-500">
                        {d.label}
                      </div>
                      <div className="text-sm font-medium text-white">{d.value}</div>
                    </div>
                    <ArrowRightIcon className="h-3.5 w-3.5 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                ))}
              </div>

              <div className="mt-2 rounded-lg border border-ink-900 bg-ink-950 p-4 text-sm leading-[1.7] text-ink-400">
                <span className="font-semibold text-white">Kathmandu, Nepal</span>
                <br />
                Office hours: Sun–Fri, 10:00–18:00 NPT
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <Newsletter />
    </>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-400">
      {children}
    </label>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
  className?: string
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  className = '',
}: FieldProps) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-ink-800 bg-black px-3 py-2.5 text-sm text-white placeholder:text-ink-700 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
