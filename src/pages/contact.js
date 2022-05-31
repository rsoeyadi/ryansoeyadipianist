import React, { useState } from "react";
import Layout from "../components/Layout";
import "../style/page.css";
import styled, { createGlobalStyle } from "styled-components";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";
import ogImage from "../images/image.jpg";

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
    margin: 2% auto 3%;
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

const FormGroup = styled.div`
  display: flex;
  
`

const FormGroupLabels = styled.div`
  display: flex;
`;
const ContactPage = (props) => {
  const image = getImage(
    props.data.contentfulContactPagePhoto.image.gatsbyImageData
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ryan Soeyadi | Contact</title>
        <link rel="canonical" href="https://www.ryansoeyadipianist.com/" />
        <meta
          name="description"
          content="Get in touch with Pianist Ryan Soeyadi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ryansoeyadipianist.com/" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content="Ryan Soeyadi | Contact" />
        <meta
          name="twitter:description"
          content="Pianist Ryan Soeyadi | Contact"
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="Pianist Ryan Soeyadi | Contact" />
        <meta
          name="twitter:image:alt"
          content="Photo of Pianist Ryan Soeyadi"
        />
        <meta property="og:site_name" content="Ryan Soeyadi Pianist" />
      </Helmet>
      <Layout>
        <Wrapper>
          <Heading>Contact</Heading>
          <MainContent>
            <GatsbyImage image={image} style={{ maxWidth: "1024px" }} />

            <Form>
              <p>
                <em>required &#x2a;</em>
              </p>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="contact-form" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <FormGroupLabels>
                  <label for="messengerFirstName">
                    First Name <em>&#x2a;</em>
                  </label>
                  <label for="messengerLastName">
                    Last Name <em>&#x2a;</em>
                  </label>
                </FormGroupLabels>
                <FormGroup>
                  <input
                    id="messengerFirstName"
                    name="messengerFirstName"
                    required=""
                    type="text"
                    required
                  />
                  <input
                    id="messengerLastName"
                    name="messengerLastName"
                    required=""
                    type="text"
                    required
                  />{" "}
                </FormGroup>
                <label for="messengerEmail">
                  Email Address<em>&#x2a;</em>
                </label>
                <input
                  id="messengerEmail"
                  name="messengerEmail"
                  required=""
                  type="email"
                  required
                />
                <label for="messengerSubject">
                  Subject <em>&#x2a;</em>
                </label>
                <input
                  id="messengerSubject"
                  name="messengerSubject"
                  required=""
                  type="text"
                  required
                />
                <label for="messengerNote">
                  Message <em>&#x2a;</em>
                </label>
                <textarea
                  id="messengerNote"
                  name="messengerNote"
                  required=""
                  rows="4"
                  required
                ></textarea>
                <button className="button-23" id="messengerForm" type="submit">
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
