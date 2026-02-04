import { Metadata } from "next";
// import About from "./_components/about";
// import AgricultureSuit from "./_components/agriculture-suit";
import OurExpertise from "./_components/our-expertise";
import Hero from "./_components/hero";
import OurServices from "./_components/our-services";
import TrustUs from "./_components/trust-us";
import HowWeWork from "./_components/how-we-work";
import WhatMakesUsDifferent from "./_components/WhatMakesUsDifferent";
import Carousel from "./_components/carousel";
// import AboutUs from "./_components/about-us";
import Products from "./_components/products";
import Initiatives from "./_components/initiatives";


export const metadata: Metadata = {
  title: 'AtiSunya Infotech Pvt Ltd ',
  description: 'AtiSunya Infotech delivers end-to-end ERP and digital transformation services across Oracle NetSuite, Zoho, Salesforce, Microsoft Dynamics 365, SAP, and the complete Microsoft ecosystem—helping businesses scale smarter and faster.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <OurExpertise />
      <TrustUs />
      <HowWeWork />
      <OurServices />
      <Initiatives />
      <WhatMakesUsDifferent />
      {/* <AboutUs /> */}

      <Products />
      {/* <AgricultureSuit /> */}
      {/* <About /> */}
    </>
  );
}
