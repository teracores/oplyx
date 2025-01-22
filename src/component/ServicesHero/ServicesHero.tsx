import React from "react";

const ServicesHero = () => {
  return (
    <div className="h-[300px] bg-[url('/aboutHero.jpg')]  bg-no-repeat bg-center bg-cover  w-full text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-white text-transparent bg-clip-text text-[60px]  font-medium tracking-tight">
        Services
      </h1>
      <br />
      <span className="text-3xl -mt-8 text-[#797979]  tracking-tighter">
        Tailored Solutions for Your Digital Success.
      </span>
    </div>
  );
};

export default ServicesHero;
