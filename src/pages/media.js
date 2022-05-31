import React, { useState } from "react";
import Layout from "../components/Layout";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import Heading from "../components/Heading";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

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

  @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 2em;
  }
`;

const MediaPage = ( {data} ) => {
    console.log({data});
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Media</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="Pianist Ryan Soeyadi | Video Performances"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Pianist" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi | Video Performances"
        />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:card"
          content="Pianist Ryan Soeyadi | Video Performances"
        />
        <meta
          name="twitter:image:alt"
          content="Photo of Pianist Ryan Soeyadi"
        />

        <meta property="og:site_name" content="Ryan Soeyadi Pianist" />
      </Helmet>
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
