import React from "react";

const Teams = () => {
  return (
    <section className="w-full">
      <span className="flex flex-col justify-center items-center">
        <h1 className="text-center text-white">MEET OUR TEAM</h1>
        <p className="text-[25px] font-bold text-center text-gray-500 py-5 w-[700px]">
          Our team is made up of highly skilled professionals who are passionate
          about their work.
        </p>
      </span>

      <div id="team-card" className="flex justify-between gap-10 mx-auto"></div>
    </section>
  );
};

export default Teams;
