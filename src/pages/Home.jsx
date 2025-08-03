import React from "react";
import Slider from "../components/Slider";
import Director from "../components/Director";
import Service from "./Service";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import Leaders from "../components/Leaders";
import Appointment from "../components/Appointment";
import Facts from "../components/Facts";
import ContactStart from "../components/Contact";
// import Carousel from "../components/Carousel"; // Uncomment if you have this component

const Home = () => {
  return (
    <>
      <Slider />
      <Director />
      <Service />
      <Features />
      <Leaders />
      <Appointment />
      {/* <Carousel /> */}
      <Facts />
      <ContactStart />
    </>
  );
};

export default Home;
