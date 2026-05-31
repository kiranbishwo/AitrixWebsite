import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteAsset, absoluteUrl, resolvePageSeo, SITE } from '../../data/seo'

function upsertMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (property) {
      tag.setAttribute('property', name)
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = rel
    document.head.appendChild(tag)
  }
  tag.href = href
}

function upsertJsonLd(id: string, data: object) {
  let tag = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`)
  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.dataset.seoId = id
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = resolvePageSeo(pathname)
    const canonical = absoluteUrl(seo.path)
    const ogImage = absoluteAsset(seo.ogImage ?? SITE.ogImage)
    const ogImageAlt = seo.ogImageAlt ?? SITE.ogImageAlt

    document.title = seo.title
    document.documentElement.lang = 'en'

    upsertMeta('description', seo.description)
    upsertMeta('keywords', seo.keywords ?? SITE.defaultKeywords)
    upsertMeta('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', canonical)

    upsertMeta('og:title', seo.title, true)
    upsertMeta('og:description', seo.description, true)
    upsertMeta('og:url', canonical, true)
    upsertMeta('og:type', 'website', true)
    upsertMeta('og:site_name', SITE.name, true)
    upsertMeta('og:locale', SITE.locale, true)
    upsertMeta('og:image', ogImage, true)
    upsertMeta('og:image:alt', ogImageAlt, true)

    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', seo.title)
    upsertMeta('twitter:description', seo.description)
    upsertMeta('twitter:image', ogImage)
    upsertMeta('twitter:image:alt', ogImageAlt)

    upsertJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: absoluteAsset('/logo.png'),
      email: SITE.email,
      description: SITE.defaultDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP',
      },
      sameAs: [SITE.url],
    })

    upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description: SITE.defaultDescription,
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        logo: absoluteAsset('/logo.png'),
      },
    })
  }, [pathname])

  return null
}
