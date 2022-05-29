import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import StyledTitle from "../components/MobileTitle";
import Heading from "../components/Heading";
import { graphql } from "gatsby";

const MainContent = styled.div`
  display: grid;
  margin-top: 3em;
  padding: 1em;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3.5em auto 5%;
    text-align: left;
    max-width: 1400px;

    .mobile {
      display: none;
    }
  }
`;

const Video = styled.div`
  /* wrap the video in another element which has an intrinsic aspect ratio */
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
  
  margin-bottom: 2em;
  iframe {
    /* absolute position the video within above container */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

const VideosWrapper = styled.div`
  margin-top: 8em;
  @media only screen and (min-width: 1024px) {
    margin: 2% auto 3%;
  }
`;

const MediaPage = ( {data} ) => {
    console.log({data});
  return (
    <>
      <Layout>
        <VideosWrapper>
          <Heading>Videos</Heading>
          <MainContent>
            {data.allContentfulVideo.edges.map(({ node }, i) => (
              <Video>
                <iframe src={node.youtubeSrc} width="600" height="400"></iframe>
              </Video>
            ))}
          </MainContent>
        </VideosWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulVideo(sort: { fields: title }) {
      edges {
        node {
          title
          youtubeSrc
        }
      }
    }
  }
`;

export default MediaPage;
