import React from "react";

const Banner2 = () => {
  return (
    <div
      className="text-white bg-cover h-[70vh] -mt-32 flex-col-reverse justify-items-end "
      style={{
        backgroundImage: "url(/banner3.jpg)",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-white block max-w-lg m-4 top-6  relative md:right-64 md:top-24 justify-center bg-black p-10 bg-opacity-50 rounded-xl border-2 border-[#797979] border-opacity-35 ">
        <h1 className="text-4xl">
          Ready to Start? Let&apos;s Build Something Great Together!
        </h1>
        <p>
          Maecenas tempor ligula phasellus per hac nisi. Facilisi curae nunc
          hendrerit vestibulum lobortis commodo lacus sagittis feugiat. Est
          sollicitudin convallis diam.
        </p>
        <div className="mt-4">
          <button className="inline-block text-xs md:text-base text-white border-2 border-white hover:bg-white hover:border-white hover:text-black transition-all duration-300 px-6 py-3 rounded-full">
            <a href="#services">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
