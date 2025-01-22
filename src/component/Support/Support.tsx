import SupportIcon from "@/Icon/SupportIcon";
import React from "react";

const SupportItem = [
  {
    title: "Customer Support",
    description:
      "Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium....",
    icon: <SupportIcon />,
  },
  {
    title: "Customer Support",
    description:
      "Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium.",
    icon: <SupportIcon />,
  },
  {
    title: "Customer Support",
    description:
      "Mus quisque non ridiculus sed himenaeos adipiscing consectetur fusce tempus lectus pretium.",
    icon: <SupportIcon />,
  },
];

const Support = () => {
  return (
    <section className="py-20 max-w-[1300px] mx-auto">
      <span className="relative bg-[url('/banner3.jpg')] w-full sm:h-[440px] h-[300px] bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
          <span className="font-extralight text-[14px] text-[#797979]">
            GET IN TOUCH
          </span>
          <h1 className="font-bold sm:text-[40px] text-[30px] text-white ">
            Need more help and support ?
          </h1>
        </div>
      </span>

      <span className="relative mt-[-70px] flex sm:flex-row flex-col sm:gap-0 gap-10 justify-between mx-5">
        {SupportItem.map((item, index) => (
          <div className="bg-[#242424] h-[320px] w-[395px] rounded-lg flex flex-col justify-center items-center gap-5">
            <div className="bg-slate-600 h-20 w-20 rounded-full flex justify-center items-center text-white text-[30px]">
              {item.icon}
            </div>
            <h1 className="text-white text-[25px] font-extralight">
              {item.title}
            </h1>
            <p className="text-[#797979] text-center px-10 text-[17px]">
              {item.description}
            </p>
            <button className="text-extralight text-[13px] bg-black hover:bg-white text-[#797979] rounded-[20px] h-[30px] w-[100px] flex justify-center items-center">
              Chat Now
            </button>
          </div>
        ))}
      </span>
    </section>
  );
};

export default Support;
