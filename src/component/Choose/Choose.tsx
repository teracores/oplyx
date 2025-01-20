// /src/components/Choose.tsx
import React from "react";
import Image from "next/image";

const Choose = () => {
  return (
    <section className="text-white md:flex p-2 justify-center mt-16">
      <div className="block max-w-lg md:ml-44">
        <div className="block">
          <p className="text-sm pb-4">Why Choose Us</p>
          <h1 className="text-5xl mb-2">
            Crafting Digital Experiences That Matter.
          </h1>
          <p className="text-base text-[#797979]">
            Dictumst porta ultricies tristique hac vestibulum himenaeos ligula.
            Cubilia sapien torquent at finibus accumsan et pellentesque class
            lacinia tristique.
          </p>
        </div>
      </div>

      <div className="block">
        <div className="overflow-hidden">
          <Image
            className="h-full relative w-full rounded-sm md:rounded-lg md:-right-28"
            alt="image"
            src="/img_1.jpg"
            height={1700}
            width={1700}
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
