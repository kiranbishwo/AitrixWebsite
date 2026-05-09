import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  LinkedInIcon,
  MailFillIcon,
  WebsiteIcon,
  YoutubeIcon,
} from '../icons/Icons'
import { FOOTER_COLUMNS } from '../../data/content'

const SOCIALS = [
  { Icon: WebsiteIcon, label: 'Website', href: 'https://aitrixlabs.com' },
  { Icon: MailFillIcon, label: 'Email', href: 'mailto:info@aitrixlabs.com' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://aitrixlabs.com' },
  { Icon: YoutubeIcon, label: 'YouTube', href: 'https://aitrixlabs.com' },
  { Icon: FacebookIcon, label: 'Facebook', href: 'https://aitrixlabs.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-ink-900 bg-black px-6 pb-7 pt-[52px]">
      <div className="mx-auto w-full max-w-container">
        <div className="mb-9 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[170px_repeat(5,1fr)]">
          <div>
            <Link to="/" className="mb-3 inline-block">
              <img
                src="/logo.png"
                alt="Aitrix Labs"
                width={140}
                height={28}
                className="block h-7 w-auto max-w-[140px] object-contain opacity-95 brightness-0 invert"
              />
            </Link>
            <p className="mb-3 max-w-[200px] text-xs leading-[1.5] text-ink-500">
              Kathmandu, Nepal · info@aitrixlabs.com
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-ink-900 transition-colors hover:border-ink-700 hover:bg-ink-950"
                >
                  <Icon className="h-3 w-3 text-ink-500" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-white">
                {col.heading}
              </h4>
              <div className="flex flex-col gap-2">
                {col.links.map((link) =>
                  'to' in link && link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-[13px] text-ink-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={'href' in link ? link.href : '#'}
                      className="text-[13px] text-ink-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-900 pt-4">
          <div className="flex flex-wrap gap-4 text-xs text-ink-500">
            <span>© 2026 Aitrix Labs. All rights reserved.</span>
            <a href="https://aitrixlabs.com" className="hover:text-white">
              Privacy
            </a>
            <a href="https://aitrixlabs.com" className="hover:text-white">
              Terms
            </a>
            <a href="mailto:info@aitrixlabs.com" className="hover:text-white">
              Security
            </a>
          </div>
          <select
            className="rounded border border-ink-900 bg-ink-900/60 px-2.5 py-1 text-xs text-ink-400"
            defaultValue="English"
          >
            <option>English</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>日本語</option>
            <option>한국어</option>
            <option>Português</option>
            <option>Español</option>
            <option>Bahasa Indonesia</option>
          </select>
        </div>
      </div>
    </footer>
  )
}
