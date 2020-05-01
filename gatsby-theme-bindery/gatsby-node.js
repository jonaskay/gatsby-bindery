const { createFilePath } = require("gatsby-source-filesystem");

const filenameParser = require("./src/common/filename-parser");

exports.onCreateNode = ({ node, actions, getNode }, themeOptions) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent);

    if (parent.sourceInstanceName === "chapters") {
      const filePath = createFilePath({ node, getNode });

      createNodeField({
        name: "number",
        node,
        value: filenameParser.number(filePath),
      });

      const basePath = themeOptions.basePath || "";
      const slug = filenameParser.slug(filePath);
      createNodeField({
        name: "slug",
        node,
        value: `${basePath}${slug}`,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`ERROR: Loading "createPages" query`);
  }

  const chapters = result.data.allMdx.edges;
  chapters.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: themeOptions.component,
      context: {
        id: node.id,
      },
    });
  });
};
