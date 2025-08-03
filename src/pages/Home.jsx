import React from "react";
import Slider from "../components/Slider";
import Director from "../components/Director";
import Service from "./Service";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features ";
import Leaders from "../components/Leaders";
import Appointment from "../components/Appointment";
import Facts from "../components/Facts";
import ContactStart from "../components/ContactStart ";

const Home = () => {
  return (
    <>
      <Slider />
      <Director />
      <Service />
      <Features/>
      <Leaders/>
      <Appointment/>
      <Facts/>
      <Testimonial/>
      
    </>
  );
};

export default Home;
