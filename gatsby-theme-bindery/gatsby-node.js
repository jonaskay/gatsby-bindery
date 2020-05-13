const { createFilePath } = require("gatsby-source-filesystem");

const filenameParser = require("./src/common/filename-parser");

exports.onCreateNode = ({ node, actions, getNode }, themeOptions) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent);

    if (parent.sourceInstanceName === "chapters") {
      const filePath = createFilePath({ node, getNode });

      createNodeField({
        name: "content",
        node,
        value: "chapter",
      });

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
      allMdx(sort: { fields: [fields___number], order: ASC }) {
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
  chapters.forEach(({ node }, index) => {
    const previousChapter = index > 0 ? chapters[index - 1] : null;
    const nextChapter = chapters[index + 1];

    createPage({
      path: node.fields.slug,
      component: themeOptions.component,
      context: {
        id: node.id,
        previous: previousChapter ? previousChapter.node.id : null,
        next: nextChapter ? nextChapter.node.id : null,
      },
    });
  });
};
