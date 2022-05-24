import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {graphql } from 'gatsby'
import Layout from "../components/Layout";
import "../style/page.css";

const blog = ({ data }) => {

  return (
    <>
      <Layout></Layout>

      {data.allContentfulBlogPost.edges.map(({ node }, i) => (
          <>
        <h1>{node.title}</h1>
        <p>{node.slug}</p>
       </>
      ))}
    </>
  );
};

export const query = graphql`
  {
  allContentfulBlogPost {
    edges {
      node {
        title
        subtitle
        slug
        content {
          raw
        }
      }
    }
  }
}

`;

export default blog;
