import { Outlet } from 'react-router-dom'
import { SeoHead } from '../seo/SeoHead'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <>
      <SeoHead />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
