import React from 'react'
import styled from "styled-components";

const Title = styled.div`
  margin-top: 8em;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    font-size: 30px;
  }

  .title {
    font-size: 40px;
  }
  span.title:nth-child(1) {
    text-align: right;
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span.title:nth-child(2) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .subtitle {
    font-family: "Great Vibes", cursive;
    font-size: 32px;
  }

  span.subtitle {
    animation: fade-in 0.8s 1.75s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 1024px) and (max-height: 430px) {
    margin-top: 0;
    display: none;
  }


`;

const MobileTitle = () => {
  return (
    <Title>
      <div>
        <span className="title">Ryan&nbsp;</span>
        <span className="title">Soeyadi</span>
      </div>
      <span className="subtitle">Pianist</span>
    </Title>
  );
}

export default MobileTitle