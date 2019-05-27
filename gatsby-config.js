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
        name: `جوشن کبیر`,
        short_name: `جوشن`,
        start_url: `/`,
        background_color: `#00524D`,
        theme_color: `#00524D`,
        display: `fullscreen`,
        icon: `${__dirname}/src/images/jawshan.png`, // This path is relative to the root of the site.
      }
    }, {
      resolve: `gatsby-plugin-offline`,
      options: {
        importWorkboxFrom: `local`,
        globDirectory: `${__dirname}`,
        cacheId: `gatsby-plugin-offline`,
        // Don't cache-bust JS or CSS files, and anything in the static directory, since
        // these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp and same
            // reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`
          }, {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`
          }, {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`
          }
        ],
        skipWaiting: true,
        clientsClaim: true
      }
    },
    `gatsby-plugin-emotion`, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140902702-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        alwaysSendReferrer: true,
        cookieDomain: "jawshan.ir"
      }
    }
  ]
}
