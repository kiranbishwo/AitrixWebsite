import { Link } from 'react-router-dom'
import { CloseIcon } from '../icons/Icons'
import { PRIMARY_NAV } from '../../data/nav'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[300] overflow-y-auto bg-white px-6 pb-6 pt-[76px] transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded text-ink-800 hover:bg-ink-100"
        aria-label="Close menu"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <nav className="flex flex-col">
        {PRIMARY_NAV.map((item) => {
          const cls =
            'block border-b border-ink-100 py-4 text-base font-medium text-ink-800'
          if (item.to) {
            return (
              <Link key={item.label} to={item.to} className={cls} onClick={onClose}>
                {item.label}
              </Link>
            )
          }
          return (
            <a
              key={item.label}
              href={item.href ?? '#'}
              className={cls}
              onClick={onClose}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="mt-6 flex flex-col gap-2.5">
        <a
          href="tel:+9779800000000"
          className="flex items-center justify-center gap-1.5 rounded border border-ink-300 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:bg-ink-50"
          onClick={onClose}
        >
          Call us
        </a>
        <a
          href="mailto:info@aitrixlabs.com"
          className="flex items-center justify-center gap-1.5 rounded border border-ink-300 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:bg-ink-50"
          onClick={onClose}
        >
          Email
        </a>
        <a
          href="https://aitrixlabs.com"
          className="flex items-center justify-center gap-1.5 rounded bg-ink-900 px-4 py-3.5 text-sm font-semibold text-white hover:bg-black"
          onClick={onClose}
        >
          Get started
        </a>
      </div>
    </div>
  )
}
