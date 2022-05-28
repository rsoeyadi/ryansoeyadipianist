import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import StyledTitle from '../components/MobileTitle'

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
const Wrapper = styled.div`
 
`
const index = () => {
  return (
    <Wrapper>

      <Layout>
        <MainContent>
          <Aboutimg />

          <BiographySection />
        </MainContent>
      </Layout>
    </Wrapper>
  );
};

export default index;
