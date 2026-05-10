import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import favicon from './assets/half_logo.png'

const faviconLink =
  document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
  (() => {
    const link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
    return link
  })()
faviconLink.type = 'image/png'
faviconLink.href = favicon

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
