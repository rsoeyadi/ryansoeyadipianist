import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Rs from "../images/svg/rs.svg";

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

  @media only screen and (min-width: 1024px), (max-height: 430px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 5% 0 5%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  @media only screen and (min-width: 1024px), (max-height: 1175px) {
    padding: 50px 0 0 5%;
  }
`;

const MenuLinks = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 10px 17px;
    text-align: center;
    display: block;
    float: left;
    font-size: 1.1em;
  }

  a {
    color: black;
  }
`;
const DesktopTitle = styled.div`
  margin-top: 2em;
  text-align: left;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: 0.5fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    font-size: 25px;
  }

  .load-in-1 {
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .title {
    font-size: 40px;
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
    grid-column-start: 2;
  }

  @media only screen and (max-height: 430px) {
    .subtitle {
      margin-top: 0;
    }
  }

  @media only screen and (max-height: 430px) and (min-width: 1000px) {
    .subtitle {
      margin-top: -30px;
    }
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
    width: 80px;
  }

  @media only screen and (max-height: 430px) {
    svg {
      width: 70px;
    }
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
            <span className="title load-in-1">Ryan&nbsp;</span>
            <span className="title load-in-2">Soeyadi</span>
          </div>
          <span className="subtitle load-in-3">Pianist</span>
        </DesktopTitle>
        <MenuLinks>
          <ul>
            <li>
              <Link to="/" activeStyle={{ color: "grey" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="media" activeStyle={{ color: "grey" }}>
                Media
              </Link>
            </li>{" "}
            <li>
              <Link to="/blog" activeStyle={{ color: "grey" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/events" activeStyle={{ color: "grey" }}>
                Events
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
