"use client";
// /src/components/Choose.tsx
import React from "react";
import Image from "next/image";
import Tick from "@/Icon/Tick";

export type Choose = {
  id: number;
  title: string;
  description: string;
};

export const choose: Choose[] = [
  {
    id: 1,
    title: "Expertise and Experience",
    description:
      "Our team of seasoned professionals brings over 25 years of experience in web design and SEO, ensuring top-notch quality and innovative solutions for your business.",
  },
  {
    id: 2,
    title: "Expertise and Experience",
    description:
      "Our team of seasoned professionals brings over 25 years of experience in web design and SEO, ensuring top-notch quality and innovative solutions for your business.",
  },
  {
    id: 3,
    title: "Expertise and Experience",
    description:
      "UOur team of seasoned professionals brings over 25 years of experience in web design and SEO, ensuring top-notch quality and innovative solutions for your business.",
  },
  {
    id: 4,
    title: "Expertise and Experience",
    description:
      "Our team of seasoned professionals brings over 25 years of experience in web design and SEO, ensuring top-notch quality and innovative solutions for your business.",
  },
];

const Choose = () => {
  const [toggledItems, setToggledItems] = React.useState<number | null>(null);

  const handleToggle = (id: number) => {
    setToggledItems((prev) => (prev === id ? null : id));
  };

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
        <div className="pb-10">
          {choose.map((item: Choose) => (
            <div
              className="flex gap-2 py-3 flex-col justify-center border-b border-white"
              key={item.id}
            >
              <span
                onClick={() => handleToggle(item.id)}
                className="flex items-center cursor-pointer gap-5"
              >
                <Tick />
                <p>{item.title}</p>
              </span>

              <div
                className={`overflow-hidden transition-all ease-linear duration-700 ${
                  toggledItems === item.id ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="py-2 text-[#797979]">{item.description}</p>
              </div>
            </div>
          ))}
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
