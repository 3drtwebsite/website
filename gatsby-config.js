module.exports = {
  siteMetadata: {
    title:
      "3D Printing, 3D Design, 3D Fusion Services in Calgary. Whether you're strategy includes in-house 3D printing capacity, or on-demand 3D printing and design services, we can help! Call us at 403-874-3131",
    titleTemplate: "%s · 3'D Revolution Technologies",
    description: "We provide 3D printing services to help you Make it Real! ",
    url: "https://www.3drtinc.com", // No trailing slash allowed!
    siteUrl: `https://www.3drtinc.com`,
    image: "/images/logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/privacy-policy/`, `/terms-of-use/`],
      },
    },
    // GA
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-92817458-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
