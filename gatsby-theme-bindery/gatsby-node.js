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
    }
  }
};
