import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import StyledTitle from "../components/MobileTitle";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ContactPageQuery {
    contentfulContactPagePhoto(title: { eq: "Alice Tully Hall Photo" }) {
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
const ContactPage = ( props ) => {
            
  const image = getImage(
    props.data.contentfulContactPagePhoto.image.gatsbyImageData
  );

  return (
    <Wrapper>
      <Layout>
        <MainContent>
          <GatsbyImage image={image} style={{ maxWidth: "1024px" }} />
        </MainContent>
      </Layout>
    </Wrapper>
  );
};

export default ContactPage;
