import React, { useState } from "react";
import Layout from '../components/Layout'
import Aboutimg from '../components/Aboutimg'
import Heading from '../components/Heading'
const index = () => {

  return (
    <>
      <Layout />
      
      <Aboutimg />
      <Heading heading="Biography" />
      
      
    </>
  );
};

export default index;
