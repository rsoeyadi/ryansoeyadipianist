import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import StyledTitle from "../components/MobileTitle";
import Heading from "../components/Heading";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

const Image = styled.div``;

const GalleryWrapper = styled.div`
  margin-top: 8em;
  max-width: 1500px;
  @media only screen and (min-width: 1024px) {
    margin: 2% auto 3%;
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
      <Layout>
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
