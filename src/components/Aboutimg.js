import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticImageStyle } from "./Aboutimg.module.css";
import styled, { createGlobalStyle } from "styled-components";
const StaticImageWrapper = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  margin-top: 10em;
  max-width: 768px;
`;

const ImageCaption = styled.p`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 0;
`;
const Aboutimg = () => {
  return (
    <>

      <StaticImageWrapper>
        <StaticImage
          src="../images/about-img.jpg"
          alt="Ryan Soeyadi Headshot"
          className={StaticImageStyle}
        />
        <ImageCaption>Photo by Jiyang Chen</ImageCaption>
      </StaticImageWrapper>
    </>
  );
};

export default Aboutimg;
