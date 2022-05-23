import React from 'react'
import styled from "styled-components";

const H1 = styled.h1`
    background-color: red;
`
const Heading = (props) => {

  const heading = props.heading;
  return (
    <H1>{heading}</H1>
  );
}

export default Heading