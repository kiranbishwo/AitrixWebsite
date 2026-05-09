import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="border-t border-ink-900 bg-black px-6 py-9">
      <div className="mx-auto flex w-full max-w-container flex-wrap items-center justify-between gap-6">
        <h3 className="text-xl font-bold text-white">Subscribe for Aitrix Labs updates</h3>
        <form onSubmit={onSubmit} className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="min-w-[250px] rounded border border-ink-800 bg-ink-900/60 px-4 py-2.5 text-sm text-white placeholder:text-ink-700 focus:border-primary focus:outline-none max-sm:min-w-0 max-sm:w-full"
          />
          <button
            type="submit"
            className="rounded bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  )
}
