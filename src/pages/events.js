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
    font-size: 16px;
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
    margin: 0;
  }
  img {
    max-width: 100%;
  }

  .listed-event-date {
    font-size: 16px;
    line-height: 1.4em;
    position: absolute;
    background-color: white;
    right: 30px;
    top: 90px;
    height: 50px;
    width: 50px;
    word-spacing: 50px;
    text-align: center;
    text-transform: uppercase;
  }
`;
const EventsPage = ({ data, location, props }) => {
  console.log(props);
  return (
    <EventsWrapper>
      <Layout>
        <div>
          <Heading className="center">Events</Heading>
          {data.allContentfulEvent.edges.map(({ node }, i) => (
            <EventWrapper>
              <Link to={`${node.slug}`}>
                <h1 className="listed-event">{node.title}</h1>

                <GatsbyImage
                  image={getImage(node.image.gatsbyImageData)}
                  style={{ maxWidth: "1024px", marginTop: "2em" }}
                />
              </Link>
              <p className="listed-event-date">{node.date}</p>
            </EventWrapper>
          ))}
        </div>
      </Layout>
    </EventsWrapper>
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
