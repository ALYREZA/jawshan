module.exports = {
  siteMetadata: {
    title: `جوشن کبیر`,
    description: `دعای جوشَن کبیر دعایی است برای شیعیان که در آن خدا به نام‌ها و صفات گوناگون که در آیات و روایات اسلامی آمده‌است خوانده می‌شود. از دیدگاه شیعیان، «جوشن کبیر» توسط جبرئیل به محمد آموخته شده و خواندنش، از اعمال مخصوص شب‌های قدر محسوب می‌شود.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-json`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        icon: `${__dirname}/src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`
  ]
}
