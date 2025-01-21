import Aboutus from "@/component/About/AboutUS";
import AboutHero from "@/component/AboutHero/AboutHero";
import { Banner } from "@/component/Banner/Banner";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutHero />
      <Aboutus />
      <Banner />
    </main>
  );
};

export default page;
