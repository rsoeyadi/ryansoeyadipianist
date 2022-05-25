import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { useState, useEffect } from "react";
import { navigate } from "gatsby";
import '../../components/BlogButton.module.css'
import "../../style/page.css";

const BlogPost = ({ location, data }) => {
  var node;
  const useIsSsr = () => {
    // we always start off in "SSR mode", to ensure our initial browser render
    // matches the SSR render
    const [isSsr, setIsSsr] = useState(true);

    useEffect(() => {
      // `useEffect` never runs on the server, so we must be on the client if
      // we hit this block
      setIsSsr(false);
    }, []);

    return isSsr;
  };

  const isSsr = useIsSsr();
  if (isSsr) return null;
  for (let i = 0; i < data.allContentfulBlogPost.edges.length; i++) {
    if (
      data.allContentfulBlogPost.edges[i].node.slug === location.state.passSlug
    ) {
      node = data.allContentfulBlogPost.edges[i].node;
      break;
    }
  }

  const image = getImage(node.image); // for my optimized Gatsby Image

  return (
    <Layout>
      <BlogContent>
        <HeadingButtonWrapper>
          {" "}
          <button onClick={() => navigate(-1)}>Back</button>
          <Heading>{node.title}</Heading>
          <p className="date">{node.date}</p>
        </HeadingButtonWrapper>
        <GatsbyImage image={image} />
        <p className="content">{renderRichText(node.content, options)}</p>
      </BlogContent>
    </Layout>
  );
};

const HeadingButtonWrapper = styled.div`

  .date {
    display: inline-block;
  }
  button {
    margin-bottom: 5em;
    float: left;

    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    padding: 14px 16px 16px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms, background 200ms;
    background: transparent;
    color: #000000;
    box-shadow: 0 0 0 3px #000000 inset;
    :hover {
      transform: translateY(-2px);
    }
  }
`;

const BlogContent = styled.div`
  margin-top: 8em;
  text-align: center;
  padding: 2em;

  img {
    margin-top: 1em;
  }
  .content {
    text-align: left;
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
            gatsbyImageData(width: 1024)
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
