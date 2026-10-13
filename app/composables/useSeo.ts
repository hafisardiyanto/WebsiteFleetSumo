import { useHead } from '#app'

/**
 * Helper to set SEO metadata for a page.
 * @param options.title - SEO title (50-60 characters)
 * @param options.description - Meta description (150-160 characters)
 * @param options.keywords - Focus keyword (unique per page)
 * @param options.image - URL to featured image (absolute or relative)
 * @param options.url - Canonical URL of the page
 */
export function useSeo({
  title,
  description,
  keywords,
  image,
  url,
}: {
  title: string
  description: string
  keywords: string
  image: string
  url: string
}) {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [{ rel: 'canonical', href: url }],
    script: [
      {
        // Using any to satisfy TypeScript type constraints for JSON-LD script
        type: 'application/ld+json' as any,
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description: description,
          url: url,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: []
          }
        })
      }
    ]
  })
}
