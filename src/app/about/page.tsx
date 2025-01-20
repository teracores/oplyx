import About from "@/component/About/About";
import AboutHero from "@/component/AboutHero/AboutHero";
import { Banner } from "@/component/Banner/Banner";
import Teams from "@/component/Teams/Teams";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutHero />
      <About />
      <Banner />
      <Teams />
    </main>
  );
};

export default page;
