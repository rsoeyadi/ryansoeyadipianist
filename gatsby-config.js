require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ryan Soeyadi | Pianist`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Pianist Ryan Soeyadi is first prize winner of the 2018 Kosciuzko Foundation Chopin Competition in Washington D.C.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display`, `Great Vibes`],
        display: "swap",
      },
    },  
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
  resolve: 'gatsby-plugin-react-svg',
  options: {
    rule: {
      include: /svg/
    }
  }
},
{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Soeyadi | Pianist`,
        short_name: `RS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
	icon: `src/images/favicon.jpg`,
      },
    }
 
  ],
};
