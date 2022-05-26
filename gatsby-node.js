const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query MyQuery {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
