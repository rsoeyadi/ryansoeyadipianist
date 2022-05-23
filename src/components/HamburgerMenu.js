import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
  }
`;
const MenuIcon = styled.button`
  top: 2rem;
  left: 2rem;
  margin-top: 2em;
  margin-left:2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999;

  div {
    width: 2.37rem;
    height: 0.24rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    top: 0;
    right: 0;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  width: 100%;
  background: white;
  z-index: 9998;
  position: fixed;

  top: 0;
  right: 0;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 300ms;
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-top: 2.5rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    :hover {
      color: #6ab4ff;
      transition: color 220ms;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const MobileBar = styled.div`
  width: 100%;
  height: 20%;
  max-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20000;
`;

const Hamburger = () => {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global />
      <MobileBar>
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MobileBar>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <Link to="#">Biography</Link>
          </li>
          <li>
            <Link to="../pages/404.js">Media</Link>
          </li>
          <li>
            <a href="../pages/404.js">Blog</a>
          </li>
          <li>
            <a href="../pages/404.js">Gallery</a>
          </li>
          <li>
            <a href="../pages/404.js">Contact</a>
          </li>
          
        </ul>
      </MenuLinks>
    </div>
  );
};

export default Hamburger;
