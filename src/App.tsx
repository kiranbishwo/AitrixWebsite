import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlatformPage } from './pages/PlatformPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProductsPage } from './pages/ProductsPage'
import { ResearchPage } from './pages/ResearchPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SecurityPage } from './pages/SecurityPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { TermsPage } from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
