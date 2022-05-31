import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { Link } from "gatsby";
import "../style/page.css";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

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
    margin: 2% auto 3%;
  }

    @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 1em;
  }
`;

const Blog = styled.div`
  margin-top: 2em;
  text-align: center;
`;

const BlogPage = ({ data, location }) => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Blog</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="View blog posts by Pianist Ryan Soeyadi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Blog" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi | Contact"
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="Pianist Ryan Soeyadi | Blog" />
        <meta
          name="twitter:image:alt"
          content="Photo of Pianist Ryan Soeyadi"
        />
        <meta property="og:site_name" content="Ryan Soeyadi Pianist" />
      </Helmet>
      <Layout isIndex="0">
        <BlogsWrapper>
          <Heading className="center">Blog</Heading>

          {data.allContentfulBlogPost.edges.map(({ node }, i) => (
            <Blog>
              <h1 className="listed-blog">
                <Link to={`${node.slug}`}>{node.title}</Link>
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
