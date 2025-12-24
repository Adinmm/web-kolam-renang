import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sonic-swim.netlify.app' // Ganti dengan domain Anda
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Jika nanti ada halaman /programs atau /contact, tambahkan di sini
  ]
}