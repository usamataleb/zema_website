import React from "react";
import Slider from "../components/Slider";
import Director from "../components/Director";
import Service from "./Service";
import Features from "../components/Features ";
import Leaders from "../components/Leaders";
import Appointment from "../components/Appointment";
import Facts from "../components/Facts";
import Contact from "../components/Contact";
import DocumentSlider from "../components/DocumentSlider";
const Home = () => {
  return (
    <>
      <DocumentSlider /> <Director />
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
