import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticImageStyle } from "./Aboutimg.module.css";
import styled from "styled-components";
import SocialMediaIcons from "./SocialMediaIcons";
import StyledTitle from './MobileTitle'
const StaticImageWrapper = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  max-width: 1024px;

  @media only screen and (min-width: 1024px) {
    svg {
      display: none;
    }
  }
`;

const ImageCaption = styled.p`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
 
`;
const AboutPageContent = () => {
  return (
    <Wrapper>
      <StyledTitle />
      <StaticImageWrapper>
        <SocialMediaIcons />
        <StaticImage
          src="../images/about-img.jpg"
          alt="Ryan Soeyadi Headshot"
          className={StaticImageStyle}
          placeholder="tracedSVG"
        />
        <ImageCaption>Photo by Jiyang Chen</ImageCaption>
      </StaticImageWrapper>
    </Wrapper>
  );
};

export default AboutPageContent;
