import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import {StaticImageStyle} from "./Aboutimg.module.css"

const Aboutimg = () => {
  
  return (
    <StaticImage
      src="../images/about-img.jpg"
      alt="Ryan Soeyadi Headshot"
      className={StaticImageStyle}/>
  );
};

export default Aboutimg;
