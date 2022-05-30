import React, { useState } from "react";
import HamburgerMenu from './HamburgerMenu'
import DesktopNav from './DesktopNav'
import styled from "styled-components";
import GatsbyLogo from "../images/svg/gatsby.svg";
import SocialMediaIcons from "../components/SocialMediaIcons";
import './footer.css'
const Layout = (props) => {
  const children = props.children;
  const FooterP = styled.p`
    margin: 0;
    padding: 0;
    display: block;
    white-space: pre;

    font-size: 10px;

    
    
  `;
  return (
    <div className="flexThisBox">
      <HamburgerMenu className="mobile" />
      <DesktopNav />
      <main>{children}</main>
      <footer>
        <div>
          <FooterP>Built with</FooterP>
          <GatsbyLogo />
        </div>
        <SocialMediaIcons />
        <div className="footer">
          <FooterP>©{new Date().getFullYear()} Ryan Soeyadi</FooterP>
          <FooterP> All Rights Reserved </FooterP>
          <FooterP>Website Made By Ryan Soeyadi</FooterP>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
