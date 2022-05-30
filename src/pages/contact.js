import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/AboutPageContent";
import BiographySection from "../components/BiographySection";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import StyledTitle from "../components/MobileTitle";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "../components/Heading";

export const query = graphql`
  query ContactPageQuery {
    contentfulContactPagePhoto(title: { eq: "ContactPagePhoto" }) {
      title
      image {
        gatsbyImageData(width: 1024)
      }
    }
  }
`;

const MainContent = styled.div`
  padding: 1em;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    margin: 0 auto 5%;
    text-align: left;
    max-width: 1600px;

    .mobile {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  margin-top: 7em;

  @media only screen and (min-width: 1024px) {
    margin-top: 3em;
  }

  @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 2em;
  }
`;

const Form = styled.div`
  margin-top: 1.5em;
  label,
  input,
  textarea {
    display: block;
    width: 100%;
    font-size: 12pt;
    line-height: 24pt;
    font-family: "Spartan";
  }

  input {
    margin-bottom: 24pt;
    width: 100%;
  }

  span {
    font-size: 8pt;
  }

  em {
    color: #f45702;
    font-weight: bold;
  }

  input,
  textarea {
    box-sizing: border-box;

    border: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: #fafafa;
    outline: none;
    padding-left: 0.5em;
  }

  input:focus,
  textarea:focus {
    border: 1px solid blue;
  }

  textarea {
    resize: none;
  }

  .button-23 {
    margin-top: 2em;

    background-color: #ffffff;
    border: 1px solid #222222;
    border-radius: 8px;
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    margin: 2em 0 3em 0;
    outline: none;
    padding: 12px 16px;
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
  button:hover {
    background: inherit;
  }

  ::selection {
    background: #ffc7b8;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    border: 1px solid #6bd4b1;
    -webkit-text-fill-color: #2a293e;
    -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;
const ContactPage = (props) => {
  const image = getImage(
    props.data.contentfulContactPagePhoto.image.gatsbyImageData
  );

  return (
    <>
      <Layout>
        <Wrapper>
          <Heading>Contact</Heading>
          <MainContent>
            <GatsbyImage image={image} style={{ maxWidth: "1024px" }} />
            <Form>
              <form action="#">
                <label for="messengerName">
                  NAME <em>&#x2a;</em>
                </label>
                <input
                  id="messengerName"
                  name="messengerName"
                  required=""
                  type="text"
                />

                <label for="messengerEmail">
                  EMAIL <em>&#x2a;</em>
                </label>
                <input
                  id="messengerEmail"
                  name="messengerEmail"
                  required=""
                  type="email"
                />
                <label for="messengerSubject">
                  SUBJECT <em>&#x2a;</em>
                </label>
                <input
                  id="messengerSubject"
                  name="messengerSubject"
                  required=""
                  type="text"
                />

                <label for="messengerNote">
                  MESSAGE <em>&#x2a;</em>
                </label>
                <textarea
                  id="messengerNote"
                  name="messengerNote"
                  required=""
                  rows="4"
                ></textarea>

                <button className="button-23" id="messengerForm">
                  Submit
                </button> 
              </form>
            </Form>
          </MainContent>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ContactPage;
