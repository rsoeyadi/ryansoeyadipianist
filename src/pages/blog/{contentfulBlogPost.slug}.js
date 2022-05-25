import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Heading";
import { graphql } from "gatsby";

const BlogPost = ({ location, data }) => {

  {
    data.allContentfulBlogPost.edges.map(
      ({ node }, i) => {
        console.log(node.slug === location.state.passSlug ? node : null);
      }
    );
  }

          return <Layout></Layout>;

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
