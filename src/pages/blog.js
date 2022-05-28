import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import "../style/page.css";

const BlogsWrapper = styled.div`
  margin-top: 8em;
  padding: 1em;
  h1,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    display: block;
  }

  p {
      0.8em;
  }

  .listed-blog {
    font-size: 20px;
  }

  .listed-blog-date {
    font-size: 16px;
  }
 @media only screen and (min-width: 1024px) {
    margin-top: 3em;
    margin-bottom: 8em;
  }
`;

const Blog = styled.div`
  margin-top: 2em;
  text-align: center;
`;

const BlogPage = ({ data, location }) => {
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
  return (
    <>
      <Layout>
        <BlogsWrapper>
          <Heading className="center">BLOGS</Heading>

          {data.allContentfulBlogPost.edges.map(({ node }, i) => (
            <Blog>
              <h1 className="listed-blog">
                <Link to={`${node.slug}`}>
                  {node.title}
                </Link>
              </h1>
              <p className="listed-blog-date">{node.date}</p>
            </Blog>
          ))}
        </BlogsWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "LL")
        }
      }
    }
  }
`;

export default BlogPage;
