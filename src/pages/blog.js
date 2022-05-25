import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { Link } from "gatsby";

const BlogsWrapper = styled.div`
  margin-top: 8em;
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


`;

const Blog = styled.div`
    margin-top: 2em;
    text-align: center;
`
const blog = ({ data }) => {

  return (
    <>
      <Layout>
        <BlogsWrapper>
          <Heading className="center">BLOGS</Heading>

          {data.allContentfulBlogPost.edges.map(({ node }, i) => (
            <Blog>
              <h1>
                <Link to={`${node.slug}`} state={{passSlug: `${node.slug}`}}>
                  {node.title}
                </Link>
              </h1>
              <p>{node.date}</p>
            </Blog>
          ))}
        </BlogsWrapper>
      </Layout>
    </>
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


export default blog;
