import React from "react";
import Image from "next/image";
import FacebookIcon from "@/Icon/Facebook";
import InstagramIcon from "@/Icon/Instagram";
import LinkedinIcon from "@/Icon/LinkedIn";
import EmailIcon from "@/Icon/Email";

const companyDescription =
  "TeraCores is a web design and development company offering innovative digital solutions. 'Tera' represents immense power, while 'Cores' signifies the core technologies driving modern experiences.";

const Footer = () => {
  const links = [
    { label: "Home", href: "" },
    { label: "About", href: "" },
    { label: "Service", href: "" },
    { label: "Blog", href: "" },
    { label: "Portfolio", href: "" },
    { label: "Contact Us", href: "" },
  ];

  const services = [
    "Web Design and Development",
    "Web App Development",
    "Software Development",
    "CMS Development",
    "Internet of Things",
    "App Development",
  ];

  const companyLinks = [
    "Career",
    "Leadership",
    "Community Service Responsibility",
  ];

  const policies = [
    { label: "Privacy Policy", href: "" },
    { label: "Termination Policy", href: "" },
    { label: "Refund Policy", href: "" },
  ];

  return (
    <footer className="text-white p-4 bg-[#181818] pb-10 border-t-2 border-[#797979]">
      <div className="md:flex justify-center gap-16 border-b-2 border-[#797979] border-opacity-30 pb-6">
        <div className="max-w-sm content-start">
          <Image
            src="/logowhite.svg"
            className="h-10 w-24 mt-5"
            alt="logo"
            height={96}
            width={96}
          />
          <p className="text-sm text-[#797979] mt-4">{companyDescription}</p>
          <div className="flex mt-4 gap-4">
            {[FacebookIcon, InstagramIcon, LinkedinIcon, EmailIcon].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#797979] hover:text-white"
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            )}
          </div>
        </div>

        {[
          { title: "Pages", items: links },
          { title: "Service", items: services },
          { title: "Company", items: companyLinks },
        ].map((section, idx) => (
          <div key={idx} className="mt-10 max-w-sm">
            <h1 className="text-2xl font-normal pb-4">{section.title}</h1>
            <ul className="text-sm">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="text-[#797979] hover:text-white transition-all duration-100 pb-2"
                >
                  <a href="">{typeof item === "string" ? item : item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-[#797979] flex  justify-center  text-xs  mt-4">
        <div className="justify-between flex md:gap-16">
          <div className="">Copyright &copy; 2025 Teracores Pvt Ltd.</div>
          <ul className="flex gap-4">
            {policies.map((policy, index) => (
              <li key={index} className="hover:text-white">
                <a href="">{policy.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
