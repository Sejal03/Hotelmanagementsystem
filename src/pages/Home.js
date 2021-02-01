import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <>
    <Navbar/>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at very low prices"
        >
         
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
