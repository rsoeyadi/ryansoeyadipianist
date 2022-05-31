import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

export const query = graphql`
  query IndexPageQuery {
    contentfulIndexPageImage(title: { eq: "IndexPhoto" }) {
      title
      image {
        gatsbyImageData(width: 1024)
      }
    }
  }
`;

const MainContent = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto 5%;
    text-align: left;
    max-width: 1400px;

    .mobile {
      display: none;
    }
  }
`;
const Wrapper = styled.div``;
const IndexPage = (props) => {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Pianist</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="Pianist Ryan Soeyadi is first prize winner of the 2018 Kosciuzko Foundation Chopin Competition in Washington D.C."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Pianist" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi is first prize winner of the 2018 Kosciuzko Foundation Chopin Competition in Washington D.C."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:card"
          content="Pianist Ryan Soeyadi is first prize winner of the 2018 Kosciuzko Foundation Chopin Competition in Washington D.C."
        />
        <meta name="twitter:image:alt" content="Photo of Pianist Ryan Soeyadi"/>

        <meta property="og:site_name" content="Ryan Soeyadi Pianist"/>
      </Helmet>
      <Layout isIndex="1">
        <MainContent>
          <Aboutimg>{props.data.contentfulIndexPageImage}</Aboutimg>

          <BiographySection />
        </MainContent>
      </Layout>
    </Wrapper>
  );
};

export default IndexPage;
