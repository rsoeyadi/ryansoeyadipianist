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
    padding: 50px 10% 0 20px;

   
  }
`;

const MenuLinks = styled.div``;
const DesktopTitle = styled.div`
  margin-top: 2em;
  text-align: left;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

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
    opacity: 0;
    filter: blur(4px);
    font-size: 30px;
  }

  .title {
    font-size: 50px;
  }


  span.title:nth-child(1) {
    text-align: right;
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span.title:nth-child(2) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .subtitle {
    margin-top: -50px;
    font-family: "Great Vibes", cursive;
    font-size: 32px;
  }

  span.subtitle {
    animation: fade-in 0.8s 1.75s forwards cubic-bezier(0.11, 0, 0.5, 0);
    grid-column-start: 2;
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  svg {
      width: 100px;
      
  }

  `;
const DesktopNav = () => {
  return (
    <div>
      <Global />

      <Navbar>
        <DesktopTitle>
          <Link to="/">
            <Rs />
          </Link>
          <div>
            <span className="title">Ryan&nbsp;</span>
            <span className="title">Soeyadi</span>
          </div>
          <span className="subtitle">Pianist</span>
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
