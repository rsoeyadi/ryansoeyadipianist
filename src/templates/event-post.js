import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import styled from "styled-components";
import Heading from "../components/Heading";
import SHeading from "../components/SHeading";
import Subheading from "../components/SHeading";

export const query = graphql`
  query eventQuery($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      title
      date(formatString: "LL [at] h:mma")
      slug
      location
      recordingIsAvailable
      youtubeSrc
      image {
        gatsbyImageData(width: 1024)
      }
      description {
        raw
      }
    }
  }
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
  },
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const EventContentWrapper = styled.div`
  margin: 8em 2em 1em;

   @media only screen and (min-width: 1024px) {
     margin: 3em 2em 8em;
  }
    .button-23 {
        background-color: #ffffff;
        border: 1px solid #222222;
        border-radius: 8px;
        box-sizing: border-box;
        color: #222222;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 0 0 3em 0;
        outline: none;
        padding: 6px 12px;
        position: relative;
        text-align: center;
        text-decoration: none;
        touch-action: manipulation;
        transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
            transform 0.1s;
        user-select: none;
        -webkit-user-select: none;
        width: auto;
        }
    }

  @media only screen and (min-width: 1024px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 1125px;
      margin: 2em auto 0;
      grid-column-gap: 1.5em;
    }

    .gatsby-image-wrapper, p {
      margin-top: 0 !important;
    }

    .button-23 {
      margin: 0;
    }

  
  }

   
`;

const Video = styled.div`

  /* wrap the video in another element which has an intrinsic aspect ratio */
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;

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

const EventContentWithRecording = styled.div`
  margin: 0 auto;
  max-width: 768px;
  

  @media only screen and (min-width: 1024px) {
    max-width: 1600px;
    margin-top: 5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    .information {
      grid-column-start: 2;
      grid-row-start: 1;
    }
    iFrame {
      grid-column-start: 1;
      
    }

  }
`;

const EventContentWithoutRecording = styled.div`
  margin: 0 auto;
  max-width: 768px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 1024px) {
    max-width: 1600px;
    margin-top: 5em;
  }
`;

const WhereWhen = styled.div`
  text-align: center;
  margin-top: 1em;
  
  p {
    margin: 0; padding: 0;
  }
  
`;
const EventPage = (props) => {
  const recordingExists = props.data.contentfulEvent.recordingIsAvailable;

  if (recordingExists) {
  return (
    <Layout>
      <EventContentWrapper>
        <Link to="/events/">
          <button className="button-23">Back</button>
        </Link>
        <Heading>{props.data.contentfulEvent.title}</Heading>

        <WhereWhen>
          <p>{props.data.contentfulEvent.date} </p>
          <p>{props.data.contentfulEvent.location}</p>
        </WhereWhen>
        <EventContentWithRecording>
          <div className="information">
            <p>
              {renderRichText(props.data.contentfulEvent.description, options)}
            </p>
          </div>

          <Video>
            <iframe
              src={props.data.contentfulEvent.youtubeSrc}
              width="600"
              height="400"
            ></iframe>{" "}
          </Video>
        </EventContentWithRecording>
      </EventContentWrapper>
    </Layout>
  ); } else {

return (
  <Layout>
    <EventContentWrapper>
      <Link to="/events/">
        <button className="button-23">Back</button>
      </Link>
      <Heading>{props.data.contentfulEvent.title}</Heading>
      <WhereWhen>
        <p>{props.data.contentfulEvent.date} </p>
        <p>{props.data.contentfulEvent.location}</p>
      </WhereWhen>

      <EventContentWithoutRecording>
        <div className="information">
          <p>
            {renderRichText(props.data.contentfulEvent.description, options)}
          </p>
        </div>
      </EventContentWithoutRecording>
    </EventContentWrapper>
  </Layout>
);    
  }
};

export default EventPage;
