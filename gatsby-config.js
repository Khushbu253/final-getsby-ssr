/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://getsby-demo.vercel.app/`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      },
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
}
