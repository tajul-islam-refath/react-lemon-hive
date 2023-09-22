import React from "react";
import Hero from "../../components/Hero/Hero";
import OurSponsor from "../../components/OurSponsor/OurSponsor";
import Conferences from "../../components/Conferences/Conferences";

const Home = () => {
  return (
    <>
      <Hero />
      <Conferences />
      <OurSponsor />
    </>
  );
};
export default Home;
