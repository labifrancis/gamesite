// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});
console.log(process.env.SANITY_TOKEN);
/*
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e4h5wcbnzqxz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e4h5wcbnzqxz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
  ],
};
 */
/* export default {
  siteMetadata: {
    title: `Nigerian foods`,
    siteUrl: `https://nigerianfoods.gatsbyjs.io/`,
    description: `Nigerian foods you will like`,
  },

  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'el2hmwsy',
        dataset: 'production',
        watchmode: true,
        token: 'process.env.SANITY_TOKEN',
      },
    },
  ],
};
 */
