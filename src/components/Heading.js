import React from 'react'
import styled from "styled-components";
const H1 = styled.h1`
  // https://1stwebdesigner.com/css-text-effects/
  font-weight: 300;
  margin: 0 auto;
  display: block;
  margin-bottom: 0;

  text-align: center;
  color: rgba(100, 100, 100, 0.1);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#222),
    to(#222),
    color-stop(0.5, #fff)
  );
  background: -moz-gradient(
    linear,
    left top,
    right top,
    from(#222),
    to(#222),
    color-stop(0.5, #fff)
  );
  background: gradient(
    linear,
    left top,
    right top,
    from(#222),
    to(#222),
    color-stop(0.3, #fff)
  );
  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: shimmer;
  -moz-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #222;

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
`;
const Heading = (props) => {
  
  return (
    <>
      <H1>{props.children}</H1>
    </>
  );
}

export default Heading