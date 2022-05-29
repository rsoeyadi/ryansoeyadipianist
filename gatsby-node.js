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

      allContentfulEvent(sort: { fields: date, order: DESC }) {
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

  response.data.allContentfulEvent.edges.forEach((edge) => {
    createPage({
      path: `/events/${edge.node.slug}`,
      component: path.resolve("./src/templates/event-post.js"),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};

