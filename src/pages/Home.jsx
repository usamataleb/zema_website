import React from "react";
import Slider from "../components/carousel";
import Director from "../components/Director";
import Service from "./Service";
import Features from "../components/Features ";
import Leaders from "../components/Leaders";
import Appointment from "../components/Appointment";
import Facts from "../components/Facts";
import Contact from "../components/Contact";
import Panels from "../components/Panels";
import Intro from "../components/Intro";
import RightPanel from "../components/rightpanel";
import NewsEvents from "../components/NewsEvents";
const Home = () => {
  return (
    <>
      <Panels />
      {/* <div className="container">
        <RightPanel />
      </div> */}
      <Director />
      <NewsEvents />
      <Service />
      {/* <Features /> */}
      {/* <Appointment /> */}
      {/* <Facts /> */}
      {/* <Contact /> */}
      <Leaders />
    </>
  );
};

export default Home;
