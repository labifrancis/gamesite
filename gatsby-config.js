// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
