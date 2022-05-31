import React, { useState } from "react";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

const MainContent = styled.div`
  display: grid;
  margin-top: 3em;
  padding: 1em;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3.5em auto 5%;
    text-align: left;
    max-width: 1400px;

    .mobile {
      display: none;
    }
  }
`;

const GalleryWrapper = styled.div`
  margin-top: 8em;
  max-width: 1500px;
  @media only screen and (min-width: 1024px) {
    margin: 2% auto 3%;
  }

  @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 2em;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1em;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3em;
  }

  
`;

const GalleryPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Gallery</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="View Pianist Ryan Soeyadi's photo gallery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Gallery" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi | Contact"
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="Pianist Ryan Soeyadi | Gallery" />
        <meta
          name="twitter:image:alt"
          content="Photo of Pianist Ryan Soeyadi"
        />
        <meta property="og:site_name" content="Ryan Soeyadi Pianist" />
      </Helmet>
      <Layout isIndex="0">
        <GalleryWrapper>
          <Heading>Gallery</Heading>
          <GridWrapper>
            {data.allContentfulGalleryImage.edges.map(({ node }, i) => (
              <GatsbyImage
                image={getImage(node.photo.gatsbyImageData)}
                style={{ maxWidth: "1024px", marginTop: "2em" }}
              />
            ))}
          </GridWrapper>
        </GalleryWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulGalleryImage(sort: { fields: title }) {
      edges {
        node {
          title
          caption
          photo {
            gatsbyImageData(width: 1024)
          }
        }
      }
    }
  }
`;

export default GalleryPage;
