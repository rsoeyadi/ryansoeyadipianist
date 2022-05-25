import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Heading";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
  },
};

const BlogPost = ({ location, data }) => {
  var node;
  for (let i = 0; i < data.allContentfulBlogPost.edges.length; i++) {
    if (data.allContentfulBlogPost.edges[i].node.slug === location.state.passSlug) {
      node = data.allContentfulBlogPost.edges[i].node;
      break;
    }
  }

  return (
    <Layout>
      <h1>{node.title}</h1>
      <p>{node.date}</p>
      <p>{node.slug}</p>
      <p>{renderRichText(node.content, options)}</p>
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
