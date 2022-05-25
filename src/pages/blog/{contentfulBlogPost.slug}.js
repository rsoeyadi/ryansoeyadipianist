import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Heading";
import { graphql } from "gatsby";

const BlogPost = ({ location, data }) => {
  // {
  //    data.allContentfulBlogPost.edges.map(
  //     ({ node }, i) => {
  //       console.log(node.slug === location.state.passSlug ? node : null);
  //     }
  //   );
  // }
  var node = null;
  for (let i = 0; i < data.allContentfulBlogPost.edges.length; i++) {
    if (
      data.allContentfulBlogPost.edges[i].node.slug === location.state.passSlug
    ) {
      node = data.allContentfulBlogPost.edges[i].node;
      break;
    }
  }

  console.log(node);

  return (
    <Layout>
      <h1>{node.title}</h1>
      <p>{node.slug}</p>
      <h1>{node.title}</h1>
      <p>{node.slug}</p>
      <h1>{node.title}</h1>
      <p>{node.slug}</p>
      <h1>{node.title}</h1>
      <p>{node.slug}</p>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          date(formatString: "LL")
          image {
            publicUrl
          }
          content {
            raw
          }
        }
      }
    }
  }
`;

// {
//     allContentfulBlogPost(
//       filter: { id: { eq: "a01696e2-03c9-5e71-8f79-0a81212ff732" } }
//     ) {
//       edges {
//         node {
//           title
//           id
//         }
//       }
//     }
//   }

export default BlogPost;
