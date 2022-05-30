import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticImageStyle } from "./Aboutimg.module.css";
import styled from "styled-components";
import SocialMediaIcons from "./SocialMediaIcons";
import StyledTitle from "./MobileTitle";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StaticImageWrapper = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  max-width: 1024px;

  @media only screen and (min-width: 1024px) {
    
    margin-top: 5.5em; 
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
  margin-top: 5em;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;
const AboutPageContent = (props) => {
  const image = getImage(props.children.image.gatsbyImageData);

  return (
    <Wrapper>
      <StyledTitle />
      <StaticImageWrapper>
        <SocialMediaIcons />
        <GatsbyImage
          image={image}
          style={{ maxWidth: "1024px"}}
        />
        <ImageCaption>Photo by Jiyang Chen</ImageCaption>
      </StaticImageWrapper>
    </Wrapper>
  );
};

export default AboutPageContent;
