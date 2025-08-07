/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.ddock-ddock-smu.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
  additionalPaths: async () => {
    const clubIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return clubIds.map((id) => ({
      loc: `/club/${id}`,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
