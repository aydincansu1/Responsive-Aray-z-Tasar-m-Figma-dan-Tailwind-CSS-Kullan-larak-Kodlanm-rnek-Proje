import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Product",
      items: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
    },
    {
      title: "Solutions",
      items: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
    },

    {
      title: "Support",
      items: [
        "Contact Us",
        "Developers",
        "Documentation",
        "Integrations",
        "Reports",
      ],
    },
    {
      title: "Get the App",
      items: [
        <img key="app-store" src={"./App Store - Filled.svg"} />,
        <img key="google-play" src={"./Google Play.png"} />,
        "",
        "Follow Us",
        <img key="social-icons" src={"./Social Icons.svg"} />,
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-start text-white py-0 px-4 md:px-20 w-[393px] h-[1514px] md:w-[1440px] md:h-[464px] bg-[#0F172A]">
      <div className="flex flex-col md:flex-row items-start  py-12 px-0 gap-12 w-[361px] h-[1324px] md:w-[1280px] md:h-[368px] border-1 border-solid border-[#334155]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center md:items-start w-[361px] h-[272px] md:w-[284px]"
          >
            <div className="flex flex-row items-center py-3 px-0 gap-2  justify-center">
              <h1 className="font-medium text-[16px] left-5">
                {section.title}
              </h1>
            </div>
            <div className="flex flex-col items-start w-[361px] h-[230px] md:w-[284px] text-[#E2E8F0] justify-center">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-start py-3 px-0 gap-2 w-full md:w-[284px] justify-center md:justify-start"
                >
                  <h1 className="font-normal text-[16px] leading-[22px]">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="horizontal-line"></div>

      <div className="w-[361px] md:w-[1280px] h-[190px] md:h-[96px]  text-center md:text-start flex flex-col md:flex-row  py-12  md:py-6  gap-6 md:gap-12 ">
        <h1 className="font-normal text-[16px] leading-6 items-start  text-[#E2E8F0] w-[361px] md:w-[930px] h-[22px]">
          Collers @ 2023. All rights reserved.
        </h1>
        <div className="flex flex-row justify-end items-center  gap-8 w-[302px] h-[48px]">
          <h1>Terms</h1>
          <h1>Privacy</h1>
          <h1>Contact</h1>
          <div className="flex gap-2 justify-center">
            <img src={"./EN.svg"} alt="" />
            <h1>EN</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
