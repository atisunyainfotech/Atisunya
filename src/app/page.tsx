import { Metadata } from "next";
import Hero from "./_components/hero";
import Carousel from "./_components/carousel";
import OurExpertise from "./_components/our-expertise";
import TrustUs from "./_components/trust-us";
import HowWeWork from "./_components/how-we-work";
import OurServices from "./_components/our-services";
import Initiatives from "./_components/initiatives";
import WhatMakesUsDifferent from "./_components/WhatMakesUsDifferent";
import Products from "./_components/products";
import IndustryExpertise from "./_components/industries";

export const metadata: Metadata = {
  title: 'AtiSunya Infotech Pvt Ltd',
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
      <IndustryExpertise />
      <Products />
    </>
  );
}