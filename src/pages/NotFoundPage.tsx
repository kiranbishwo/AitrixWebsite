import { LinkButton } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-6 text-center">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-primary">
        404
      </div>
      <h1 className="mb-4 text-5xl font-bold text-white">Page not found</h1>
      <p className="mb-8 max-w-md text-ink-400">
        The page you&apos;re looking for doesn&apos;t exist. Try going back home or browsing our
        products.
      </p>
      <div className="flex gap-3">
        <LinkButton variant="primary" to="/">
          Go home
        </LinkButton>
        <LinkButton variant="outline" to="/products">
          Browse products
        </LinkButton>
      </div>
    </section>
  )
}
