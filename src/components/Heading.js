import React from 'react'
import styled from "styled-components";
const H1 = styled.h1`
    margin-top: 0.5em;
    padding: 0;
`
const Heading = (props) => {
  
  return (
    <>
      <H1>{props.children}</H1>
    </>
  );
}

export default Heading