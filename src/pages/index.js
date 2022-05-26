import React, { useState } from "react";
import Layout from "../components/Layout";
import Aboutimg from "../components/Aboutimg";
import BiographySection from "../components/BiographySection";
import "../style/page.css";

const index = () => {
  return (
    <>

      <Layout>
        <Aboutimg />

        <BiographySection />
      </Layout>
    </>
  );
};

export default index;
