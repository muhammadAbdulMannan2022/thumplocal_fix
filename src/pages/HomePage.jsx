import React from "react";
import Hero from "../components/Hero";
import ServiceSelector from "../components/ServiceSelector";
import ServicesTimeline from "../components/Services";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import ServiceSelectoR from "../components/optional/ServiceSelector";
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTimeline />
      {/* <ServiceSelector /> */}
      <ServiceSelectoR />
      <WhyUs />
      <Contact />
      <FAQ />
    </>
  );
}
