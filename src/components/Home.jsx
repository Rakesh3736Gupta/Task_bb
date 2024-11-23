// Home.js
import React from "react";
import "./Home.css";
import Navbar from "./shared/Navbar";
import HeroSec1 from "./HeroSec1";
import Services from "./Services";
import ClientPage from "./ClientPage";
import InformationPage from "./InformationPage";
import WorkingDomane from "./WorkingDomane";
import About from "./About";
import TeamB from "./TeamB";
import ContactUs from "./ContactUs";
import Footer from "./shared/Footer";

import PairTechComponent from "./RightSide";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue-100 overflow-x-hidden">
        {/* Hero Section */}
        <HeroSec1 />

        <PairTechComponent />

        {/* Services Section */}
        <Services />

        {/* Client Information */}
        <ClientPage />

        {/* Information Section */}
        <InformationPage />

        {/* Working Domain Section */}
        <WorkingDomane />

        {/* About Section */}
        <About />

        {/* Team Section */}
        <TeamB />

        {/* Contact Us Section */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
