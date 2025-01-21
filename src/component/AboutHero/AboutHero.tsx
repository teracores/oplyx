import React from "react";

const AboutHero = () => {
  return (
    <div className="h-[300px] bg-[url('/aboutHero.jpg')]  bg-no-repeat bg-center bg-cover  w-full text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-white text-transparent bg-clip-text text-[60px]  font-medium tracking-tight">
        About Us
      </h1>
      <br />
      <span className="text-3xl -mt-8 text-[#797979]  tracking-tighter">
        Your Partner in Digital Innovation
      </span>
    </div>
  );
};

export default AboutHero;
