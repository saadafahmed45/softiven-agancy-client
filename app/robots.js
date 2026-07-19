export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/profile', '/login'], 
    },
    sitemap: 'https://softiven-agancy.vercel.app/sitemap.xml',
  }
}
