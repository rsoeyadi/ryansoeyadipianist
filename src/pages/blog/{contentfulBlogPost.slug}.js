import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

    const image = getImage(node.image);

  return (
    <Layout>
      <h1>{node.title}</h1>
      <p>{node.date}</p>
      <p>{renderRichText(node.content, options)}</p>
      <GatsbyImage image={image} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "LL")
          image {
            file {
              url
              fileName
              contentType
            }
            gatsbyImageData(width: 200)
          }
          content {
            raw
            __typename
          }
        }
      }
    }
  }
`;

export default BlogPost;
