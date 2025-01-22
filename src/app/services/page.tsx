import Banner2 from "@/component/Banner2/Banner2";
import Choose from "@/component/Choose/Choose";
import NewService from "@/component/Service/NewService";
import Service from "@/component/Service/service";
import ServicesHero from "@/component/ServicesHero/ServicesHero";
import Support from "@/component/Support/Support";
import React from "react";

const page = () => {
  return (
    <main className="">
      <ServicesHero />
      <NewService />
      <Support />
    </main>
  );
};

export default page;
