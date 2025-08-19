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
import NewsEvent from "../components/NewsEvent";
const Home = () => {
  return (
    <>
    <Panels />
     <Director />
      <div className="container">
        <Intro />
      </div>
     
      <NewsEvent />
      {/* <Service /> */}
      {/* <Features /> */}
      {/* <Appointment /> */}
      {/* <Facts /> */}
      {/* <Contact /> */}
      <Leaders />
    </>
  );
};

export default Home;
