import React from "react";

const Map = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-12 px-4 gap-8 isolate w-[393px] h-[717px] bg-amber-900 z-0 md:p-20 md:w-[1440px] md:h-[717px] overflow-hidden">
      <img
        src={"./mapfull.png"}
        alt="mapfull.png"
        className="absolute opacity-50 z-0 w-[1049px] h-[633px] object-cover  left-[calc(50% - 1049px/2 + 349px)] top-[calc(50% - 633px/2 - 6px)] md:left-[calc(50% - 1049px/2 + 0.5px)] md:top-[calc(50% - 633px/2)]"
      />
      <img
        src={"./Ellipses.png"}
        alt="Ellipses.png"
        className="absolute left-[233px] top-[99.8px] md:left-[406px] md:top-[109px]"
      />
      <div
        className="flex flex-col items-start gap-8 w-[361px] h-[96px] md:w-[1280px] md:h-[176px] z-20"
        style={{
          boxShadow: " 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          filter: " drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.07))",
        }}
      >
        <div className="flex flex-col items-center   gap-2 w-[361px] h-[96px] text-[#FFFBEB] md:w-[1280px] md:h-[176px]">
          <h1 className="font-extrabold text-[48px] md:text-[96px] leading-[53px] md:leading-[106px] ">
            11,658,467
          </h1>
          <h6 className="font-bold md:font-extrabold  text-[32px] md:text-[56px] leading-9 md:left-[62px] ">
            Shoes Collected
          </h6>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center isolate absolute w-[256px] h-[200px] left-[calc(50% - 256px/2 + 0.5px)] top-[10,8px] z-30 md:left-[225px] md:top-[20px]">
        <img
          src={"./Ellipse 29.png"}
          alt="Ellipse 29.png"
          className="absolute left-28 top-[250px]"
        />
        <div
          className="flex flex-col items-start isolate absolute w-[250px] h-[64px] left-[3px] top-[197px] rounded-[5px] overflow-hidden bg-[#E2E8F0]"
          style={{
            boxShadow:
              "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)",
          }}
        >
          <div className="flex flex-row items-start py-2 px-4  ">
            <p className="font-normal text-[14px] left-[140px]">
              Emma Simpson collected one pair of Cool Shoes.
            </p>
          </div>
          <img
            src={"./ArrowBottom.svg"}
            alt="ArrowBottom.svg"
            className=" z-0 w-[100px] h-[100px]  left-[90px] top-[22px] absolute"
          />
        </div>

        <div
          className="absolute flex flex-row justify-center items-center rounded-[10px] bg-white border-solid border-[5px]  w-[256px] h-[200px] z-20 overflow-hidden"
          style={{
            boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.07))",
          }}
        >
          <img src={"./shoe.jpeg"} alt="shoe.jpeg" className="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
