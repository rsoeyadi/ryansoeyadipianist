import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { createGlobalStyle } from "styled-components";
import Heading from "../components/Heading";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "LL")
      content {
        raw
      }
      image {
        gatsbyImageData(width: 1000)
      }
    }
  }
`;

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

const BlogPostWrapper = styled.div`
  margin: 8em 2em 1em;

  @media only screen and (min-width: 768px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

`;
const BlogPost = (props) => {
  const image = getImage(props.data.contentfulBlogPost.image.gatsbyImageData);
  return (
    <Layout>
      <BlogPostWrapper>
        <Link to="/blog/">Back</Link>{" "}
        <Heading>{props.data.contentfulBlogPost.title}</Heading>
        <div className="content">
          <GatsbyImage image={image} style={{ maxWidth: "512px" }} />
          <div>
            {renderRichText(props.data.contentfulBlogPost.content, options)}
          </div>
        </div>
      </BlogPostWrapper>
    </Layout>
  );
};

export default BlogPost;
