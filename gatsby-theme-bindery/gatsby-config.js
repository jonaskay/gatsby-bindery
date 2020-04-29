module.exports = (themeOptions) => {
  return {
    siteMetadata: {
      title: "gatsby-theme-bindery",
      description: "TODO: add description",
      author: "@gatsbyjs",
    },
    plugins: [
      `gatsby-plugin-mdx`,
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: "chapters", path: themeOptions.contentPath },
      },
    ],
  };
};
