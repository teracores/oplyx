import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCards: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-black bg-opacity-45 scale-95 p-6 border-2 border-[#797979] border-opacity-50 hover:scale-100 duration-300 transition-all block rounded-lg max-w-full h-full">
      <div className="flex gap-4 border-b-2 pb-5 border-[#797979] border-opacity-35">
        <div>
          <Image
            src={imageSrc}
            className="h-20 w-20"
            alt={title}
            height={24}
            width={24}
          />
        </div>
        <div className="block">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-[#797979] font-light text-sm text-justify">
            {description}
          </p>
        </div>
      </div>
      <p className="text-[#797979] font-light text-sm text-justify mt-5 pb-5 px-2">
        {description}
      </p>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <section className="block bg-no-repeat bg-center bg-contain max-h-full bg-hero-pattern">
      <div className="flex justify-center my-32">
        <div className="text-white w-auto  block max-w-6xl justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCards
              imageSrc="/web.svg"
              title="Web Design & Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCards
              imageSrc="/setting.svg"
              title="Web App Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCards
              imageSrc="/logo.svg"
              title="Software Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <ServiceCards
              imageSrc="/window.svg"
              title="CMS Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCards
              imageSrc="/vercel.svg"
              title="Internet Of Things"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCards
              imageSrc="/next.svg"
              title="App Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
