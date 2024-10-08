import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import FeacturesSection from "../components/home/FeaturesSection";
import GetInvolved from "../components/home/GetInvolved";
import Roundtables from "../components/home/Roundtables";

function Home() {
  return (
    <>
      <HeroSection />
      <main id="main">
        <ServicesSection />
        <WhyUsSection />
        <Roundtables />
        <FeacturesSection />
        <GetInvolved />
      </main>
    </>
  );
}

export default Home;