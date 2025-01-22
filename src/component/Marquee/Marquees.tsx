import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeImage {
  image: string;
}

const marqueeImage: MarqueeImage[] = [
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_3.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_4.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_5.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_6.png",
  },
  {
    image:
      "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_7.png",
  },
];
const Marquees = () => {
  return (
    <div className="text-white flex gap-5 items-start w-full">
      <Marquee gradient={false} speed={50} direction="left" pauseOnHover>
        {marqueeImage.map((image, index) => (
          <div key={index} className="px-[40px]">
            <img src={image.image} alt="marqueeImage" className="h-[50px]" />
          </div>
        ))}
        {/* <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_3.png"
            className="h-[50px]"
          />
        </div>

        <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_7.png"
            className="h-[50px]"
          />
        </div>
        <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_6.png"
            className="h-[50px]"
          />
        </div>
        <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_3.png"
            className="h-[50px]"
          />
        </div>
        <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_7.png"
            className="h-[50px]"
          />
        </div>
        <div className="px-[40px]">
          <img
            src="https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_6.png"
            className="h-[50px]"
          />
        </div> */}
      </Marquee>
    </div>
  );
};

export default Marquees;
