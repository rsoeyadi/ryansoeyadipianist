import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
  }
`;
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 2.35rem;
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
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: white;

  position: absolute;
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
`;


const Hamburger = () => {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global />
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Bio</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </MenuLinks>
    </div>
  );
};

export default Hamburger;
