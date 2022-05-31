import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

const EventsWrapper = styled.div`
  margin-top: 8em;
  padding: 1em;
  h1,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    display: block;
  }

  p {
      0.8em;
  }

  .listed-event {
    font-size: 20px;
  }

  .listed-event-date {
    
  }
 @media only screen and (min-width: 1024px) {
    margin: 2% auto 3%;
    
  }

  @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 2em;
  }
`;

const EventWrapper = styled.div`
  position: relative;
  padding: 0 1em 1em;
  margin: 1em auto 4em;
  max-width: 420px;

  h1,
  a {
    color: black;
    display: inline-block;
    text-align: center;
  }
  img {
    width: 100%;
  }
  .listed-event {
    text-decoration: none;
    position: relative;
    color: #069;

    &:after {
      content: "";
      height: 1.8px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      background: #069;
      transition: 0.3s;
    }

    &:hover:after {
      width: 100%;
    }

    &.block {
      display: block;
      padding: 0.5em;

      &:hover {
        background: #eee;
      }
    }
  }

  
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;



  .listed-event-date {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 16px;
    position: absolute;

    line-height: 1.67em;
    width: 60px;
    height: 60px;
    word-spacing: 50px;
    text-align: center;
    text-transform: uppercase;
    bottom: 20px;
    left: 15px;
    background: white;
  }

  
`;

const Image = styled.div`
  transition: transform 0.3s ease-in-out;

  :hover {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;
const EventsPage = ({ data, location, props }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Events</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="View Pianist Ryan Soeyadi's upcoming and past performances."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Events" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi | Events"
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="Pianist Ryan Soeyadi | Events" />
        <meta
          name="twitter:image:alt"
          content="Photo of Pianist Ryan Soeyadi"
        />

        <meta property="og:site_name" content="Ryan Soeyadi Pianist" />
      </Helmet>
      <Layout isIndex="0">
        <EventsWrapper>
          <Heading className="center">Events</Heading>
          {data.allContentfulEvent.edges.map(({ node }, i) => (
            <EventWrapper>
              <Link to={`${node.slug}`}>
                <h1 className="listed-event">{node.title}</h1>
                <ImageWrapper>
                  <Image>
                    <GatsbyImage
                      image={getImage(node.image.gatsbyImageData)}
                      style={{ maxWidth: "1024px", marginTop: "2em" }}
                    />
                  </Image>
                  <p className="listed-event-date">{node.date}</p>
                </ImageWrapper>
              </Link>
            </EventWrapper>
          ))}
        </EventsWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyEventsQuery {
    allContentfulEvent(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          date(formatString: "MMM DD")
          slug
          location
          image {
            gatsbyImageData(width: 1024)
          }
        }
      }
    }
  }
`;

export default EventsPage;
