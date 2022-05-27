import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/Aboutimg";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";

const StyledTitle = styled.div`
  margin-top: 8em;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    font-size: 30px;
  }

  .title {
    font-size: 40px;
  }
  span.title:nth-child(1) {
    text-align: right;
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span.title:nth-child(2) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .subtitle {
    font-family: "Great Vibes", cursive;
    font-size: 32px;
  }

  span.subtitle {
    animation: fade-in 0.8s 1.75s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
const index = () => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <div>
            <span className="title">Ryan&nbsp;</span>
            <span className="title">Soeyadi</span>
          </div>
          <span className="subtitle">Pianist</span>
        </StyledTitle>
        <Aboutimg />

        <BiographySection />
      </Layout>
    </>
  );
};

export default index;
