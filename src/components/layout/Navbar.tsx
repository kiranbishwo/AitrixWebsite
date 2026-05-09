import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRightIcon, ChevronDownIcon, MailIcon } from '../icons/Icons'
import { PRIMARY_NAV, type MenuKey } from '../../data/nav'
import { useScrolled } from '../../hooks/useScrolled'
import { useEscape } from '../../hooks/useEscape'
import { NavDropdownPanel } from './MegaMenu'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()
  const [lastPath, setLastPath] = useState(location.pathname)

  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setActiveMenu(null)
    setMobileOpen(false)
  }

  const closeAll = () => setActiveMenu(null)
  const closeMobile = () => setMobileOpen(false)

  useEscape(() => {
    closeAll()
    closeMobile()
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggle = (menu: MenuKey) =>
    setActiveMenu((current) => (current === menu ? null : menu))

  return (
    <>
      {activeMenu && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeAll}
          className="fixed inset-0 z-[99] cursor-default bg-transparent"
        />
      )}

      <nav
        className={`sticky top-0 z-[100] flex h-16 items-center border-b border-ink-200 bg-white px-6 transition-shadow ${
          scrolled ? 'shadow-nav' : ''
        }`}
      >
        <div className="mx-auto flex w-full max-w-container items-center">
          <Link to="/" className="mr-2 flex shrink-0 items-center gap-3 no-underline">
            <img
              src="/logo.png"
              alt="Aitrix Labs"
              width={148}
              height={28}
              className="block h-7 w-auto max-w-[148px] object-contain"
            />
            <span className="hidden whitespace-nowrap border-l border-ink-300 pl-2.5 text-[10px] tracking-[0.4px] text-ink-500 lg:inline">
              Nepal&apos;s Most Comprehensive AI Company
            </span>
          </Link>

          <div className="hidden flex-1 items-center gap-0.5 lg:flex">
            {PRIMARY_NAV.map((item) => {
              if (item.menu) {
                const isOpen = activeMenu === item.menu
                return (
                  <div key={item.label} className="relative inline-flex flex-col items-start">
                    <button
                      type="button"
                      onClick={() => toggle(item.menu!)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 whitespace-nowrap rounded px-3 py-2 text-sm font-medium transition-colors ${
                        isOpen
                          ? 'bg-ink-100 text-ink-800'
                          : 'text-ink-600 hover:bg-ink-100 hover:text-ink-800'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`h-3 w-3 shrink-0 text-ink-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        className="absolute left-0 top-full z-[200] pt-1"
                        role="menu"
                        aria-label={`${item.label} menu`}
                      >
                        <NavDropdownPanel menu={item.menu} />
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  to={item.to ?? '#'}
                  className="whitespace-nowrap rounded px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-800"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href="mailto:info@aitrixlabs.com"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded border border-ink-300 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-50 sm:flex"
            >
              <MailIcon className="h-3.5 w-3.5" />
              Email
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 whitespace-nowrap rounded bg-primary px-4 py-2 text-[13px] font-semibold text-white shadow-pill transition-colors hover:bg-primary-hover"
            >
              Get started
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="ml-3 flex flex-col gap-1 p-1 lg:hidden"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-5 bg-ink-800" />
              <span className="block h-0.5 w-5 bg-ink-800" />
              <span className="block h-0.5 w-5 bg-ink-800" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
