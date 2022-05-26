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

  
    .button-23 {
      
        background-color: #ffffff;
        border: 1px solid #222222;
        border-radius: 8px;
        box-sizing: border-box;
        color: #222222;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 0 0 3em 0;
        outline: none;
        padding: 6px 12px;
        position: relative;
        text-align: center;
        text-decoration: none;
        touch-action: manipulation;
        transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
            transform 0.1s;
        user-select: none;
        -webkit-user-select: none;
        width: auto;
        }
    }

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
        <Link to="/blog/">
          <button className="button-23">Back</button>
        </Link>
        <Heading>{props.data.contentfulBlogPost.title}</Heading>
        <div className="content">
          <GatsbyImage image={image} style={{ maxWidth: "512px", marginTop: "2em" }} />
          <div>
            {renderRichText(props.data.contentfulBlogPost.content, options)}
          </div>
        </div>
      </BlogPostWrapper>
    </Layout>
  );
};

export default BlogPost;
