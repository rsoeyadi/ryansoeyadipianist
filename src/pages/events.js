import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../style/page.css";
import styled from "styled-components";
import Heading from "../components/Heading";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
    max-width: 100%;
  }

  .listed-event-date {
    font-size: 16px;
    position: absolute;

    line-height: 1.67em;
    width: 60px;
    height: 60px;
    word-spacing: 50px;
    text-align: center;
    text-transform: uppercase;
    top: 90px;
    right: 30px;
    background: white;
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
const EventsPage = ({ data, location, props }) => {
  console.log(props);
  return (
    <>
      <Layout>
        <EventsWrapper>
          <Heading className="center">Events</Heading>
          {data.allContentfulEvent.edges.map(({ node }, i) => (
            <EventWrapper>
              <Link to={`${node.slug}`}>
                <h1 className="listed-event">{node.title}</h1>
                <GatsbyImage
                  image={getImage(node.image.gatsbyImageData)}
                  style={{ maxWidth: "1024px", marginTop: "2em" }}
                />
                  <p className="listed-event-date">{node.date}</p>
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
