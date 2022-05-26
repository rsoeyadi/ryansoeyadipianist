import React from "react";
import styled from "styled-components";
import YouTube from "../images/svg/youtube.svg";
import Instagram from "../images/svg/instagram.svg"

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100px;
  margin-bottom: 1em;

  svg {
    cursor: pointer;
  }

`;
const SocialMediaIcons = () => {
  return (
    <IconsWrapper>
      <a href="https://www.youtube.com/c/RyanSoeyadi" >
        <YouTube />
      </a>
      <a href="https://www.instagram.com/ryansoeyadi/?hl=en" >
        <Instagram />
      </a>
    </IconsWrapper>
  );
};

export default SocialMediaIcons;
