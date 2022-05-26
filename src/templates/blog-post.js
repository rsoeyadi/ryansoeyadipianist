import React from "react";
import { graphql, Link } from "gatsby";

import Img from "gatsby-image";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`;

const BlogPost = (props) => {
  return (
    <Layout>
      <Link to="/blog/">Back</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        
      </div>
    </Layout>
  );
};

export default BlogPost;
