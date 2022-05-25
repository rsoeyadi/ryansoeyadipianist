import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticImageStyle } from "./Aboutimg.module.css";
import styled, { createGlobalStyle } from "styled-components";
import SocialMediaIcons from "../components/SocialMediaIcons";
const StaticImageWrapper = styled.div`
  padding: 1.5em 1.5em 0 1.5em;
  margin-top: 10em;
  max-width: 768px;

  img {
    animation: fadeIn 3.5s;
    -webkit-animation: fadeIn 3.5s;
    -moz-animation: fadeIn 3.5s;
    -o-animation: fadeIn 3.5s;
    -ms-animation: fadeIn 3.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
        <SocialMediaIcons />
        <StaticImage
          src="../images/about-img.jpg"
          alt="Ryan Soeyadi Headshot"
          className={StaticImageStyle}
          placeholder="tracedSVG"
        />
        <ImageCaption>Photo by Jiyang Chen</ImageCaption>
      </StaticImageWrapper>
    </>
  );
};

export default Aboutimg;
