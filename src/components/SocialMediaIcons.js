import React from "react";
import styled from "styled-components";
import YouTube from "../images/svg/youtube.svg";
import Instagram from "../images/svg/instagram.svg"

const IconsWrapper = styled.div`
  display: grid;
 // grid-template-columns: 1fr 1fr;  // this is for 2 icons 
  grid-template-columns: 1fr;
  max-width: 50px;

  svg {
    cursor: pointer;
  }

  a {
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  a:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const SocialMediaIcons = () => {
  return (
    <IconsWrapper>
      <a href="https://www.youtube.com/c/RyanSoeyadi" >
        <YouTube />
      </a>
      {/* <a href="https://www.instagram.com/ryansoeyadi/?hl=en" >
        <Instagram />
      </a> */}
    </IconsWrapper>
  );
};

export default SocialMediaIcons;
