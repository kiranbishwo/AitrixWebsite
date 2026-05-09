import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { DocsPage } from './pages/DocsPage'
import { EventsPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'
import { InsightsPage } from './pages/InsightsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlatformPage } from './pages/PlatformPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProductsPage } from './pages/ProductsPage'
import { NewsPage } from './pages/NewsPage'
import { ResearchPage } from './pages/ResearchPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SecurityPage } from './pages/SecurityPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionDetailPage } from './pages/SolutionDetailPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { TermsPage } from './pages/TermsPage'
import { TrainingPage } from './pages/TrainingPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/company" element={<Navigate to="/about" replace />} />
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
