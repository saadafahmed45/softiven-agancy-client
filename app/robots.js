export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/profile', '/login'], 
    },
    sitemap: 'https://www.softiven.com/sitemap.xml',
  }
}
