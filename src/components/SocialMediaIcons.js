import React from "react";
import styled from "styled-components";
import YouTube from "../images/svg/youtube.svg";
import Instagram from "../images/svg/instagram.svg"
import RS from "../images/svg/rs.svg";

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100px;
  margin-bottom: 1em;

  svg {
    cursor: pointer;
  }
  opacity: 0.99;
`;
const SocialMediaIcons = () => {
  return (
    <IconsWrapper>
      <a href="https://www.youtube.com/c/RyanSoeyadi" target="__blank">
        youtube
        {/* <YouTube /> */}
      </a>
      <a href="https://www.instagram.com/ryansoeyadi/?hl=en" target="__blank">
        instagram
        {/* <Instagram /> */}
      </a>
    </IconsWrapper>
  );
};

export default SocialMediaIcons;
