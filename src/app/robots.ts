import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Opsional: larang crawler masuk ke area admin/private
    },
    sitemap: 'https://sonic-swim.netlify.app/sitemap.xml',
  }
}