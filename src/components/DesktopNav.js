import React, { useState } from "react";
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

`


const DesktopNav = () => {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global />
         
        <Link to="/">
          <Rs />
        </Link>
     
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
          <li>
            <SocialMediaIcons />
          </li>
        </ul>
      </MenuLinks>
    </div>
  );
};

export default DesktopNav;
