import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Rs from "../images/svg/rs.svg";
import StyledTitle from "./MobileTitle";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
  }

`;

const Navbar = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 10% 0 5%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const MenuLinks = styled.div``;
const DesktopTitle = styled.div`
  margin-top: 2em;
  text-align: left;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: 0.5fr 1fr;
  grid-row-gap: 1em;

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    font-size: 30px;
  }

  .load-in-1 {
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .title {
    font-size: 50px;
  }

  span.title:nth-child(1) {
    text-align: right;
  }

  .load-in-2 {
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 1s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .subtitle {
    margin-top: -50px;
    font-family: "Great Vibes", cursive;
    font-size: 32px;
  }

  span.subtitle {
    grid-column-start: 2;
  }

  .load-in-3 {
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  svg {
    width: 90px;
  }
`;

const DesktopNav = () => {

  const [done, setDone] = useState(0);

  
  return (
    <div>
      <Global />

      <Navbar>
        <DesktopTitle>
          <Link to="/">
            <Rs />
          </Link>
          <div>
            <span
              className={`title ${done ? "" : "load-in-1"}`}
              onAnimationEnd={() => console.log(done)}
            >
              Ryan&nbsp;
            </span>
            <span
              className={`title ${done ? "" : "load-in-2"}`}
              onAnimationEnd={() => console.log(done)}
            >
              Soeyadi
            </span>
          </div>
          <span
            className={`subtitle ${done ? "" : "load-in-3"}`}
            onAnimationEnd={() => console.log(done)}
          >
            Pianist
          </span>
        </DesktopTitle>
        <MenuLinks>
          <ul>
            <li>
              <Link to="/" activeStyle={{ color: "grey" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="../pages/404.js" activeStyle={{ color: "grey" }}>
                Media
              </Link>
            </li>
            <li>
              <Link to="/blog" activeStyle={{ color: "grey" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="../pages/404.js" activeStyle={{ color: "grey" }}>
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="../pages/404.js"
                activeStyle={{ textDecoration: "underline" }}
              >
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </MenuLinks>
      </Navbar>
    </div>
  );
};

export default DesktopNav;
