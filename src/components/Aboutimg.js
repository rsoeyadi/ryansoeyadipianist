import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticImageStyle } from "./Aboutimg.module.css";
import styled, { createGlobalStyle } from "styled-components";

const StaticImageWrapper = styled.div`
  padding: 1.5em;
`
const Aboutimg = () => {
  return (
    <StaticImageWrapper>
      <StaticImage
        src="../images/about-img.jpg"
        alt="Ryan Soeyadi Headshot"
        className={StaticImageStyle}
      />
    </StaticImageWrapper>
  );
};

export default Aboutimg;
