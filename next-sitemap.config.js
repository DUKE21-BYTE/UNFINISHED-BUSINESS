/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://unfinished-ideas.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // Exclude dynamic sitemap index if we add one later
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'], // Disallow API routes
      },
    ],
  },
}
