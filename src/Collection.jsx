import React from "react";

const Collection = () => {
  return (
    <section class="flex relative flex-col justify-center items-start pt-12 pr-4 pb-24 pl-4 gap-8  w-[393px] h-[722px] z-50 md:pt-20 md:pr-20 md:pb-32 md:pl-20 md:gap-20 isolate md:w-[1440px] md:h-[996px] overflow-hidden">
      <div className="absolute w-[1440px] h-[684px] left-0 top-[38px] md:top-[312px] z-0">
        <img
          src={"./Vector 10.svg"}
          alt="Vector 12.svg"
          className="absolute bottom-0"
        />
        <img
          src={"./Vector 11.svg"}
          alt="Vector 11.svg"
          className="absolute bottom-0"
        />
        <img
          src={"./Vector 12.svg"}
          alt="Vector 10.svg"
          className="absolute bottom-0"
        />
      </div>

      <div className="flex flex-col items-center md:items-start gap-8 w-[361px] md:w-[1280px]  text-[#0F172A] h-[199px] md:h-[152px] z-10 ">
        <div className="flex flex-col items-center md:items-start gap-8 md:w-[1280px] md:h-[62px] ">
          <h1 className="font-bold md:font-extrabold text-[32px] md:text-[56px] leading-9 md:leading-[62px] ">
            Grow your collection
          </h1>
        </div>
        <p className="font-normal text-[16px] md:text-[18px] text-center md:text-start leading-[22px] md:left-[29px] w-[361px] md:w-[1280px] h-[132px] md:h-[58px] z-10">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 w-[361px] h-[347px] md:w-[1280px] md:h-[556px] z-20">
        <div className="flex flex-row md:flex-col items-start gap-4 overflow-y-auto">
          <button
            className=" flex flex-row items-center p-4 w-[240px] md:w-[256px] h-[56px] bg-white rounded-lg justify-center  "
            style={{
              boxShadow:
                "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.07)",
            }}
          >
            <img
              src={"./icon/Collection/search.svg"}
              alt="search.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[18px] leading-6 mdw-[]">
              Bibendum tellus
            </span>
            <img
              src={"./icon/Collection/arrow-right.svg"}
              alt="arrow-right.svg"
              className="w-[24px]"
            />
          </button>
          <button className=" flex flex-row items-center p-4 w-[178px] md:w-[256px] h-[56px]  rounded-lg= ">
            <img
              src={"./icon/Collection/shield-check.svg"}
              alt="shield-check.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[20px] leading-6 mdw-[]">
              Cras eget
            </span>
          </button>
          <button className=" flex flex-row items-center p-4 w-[178px] md:w-[256px] h-[56px]  rounded-lg= ">
            <img
              src={"./icon/Collection/rocket.svg"}
              alt="rocket.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[20px] leading-6 mdw-[]">
              Dolar pharetra
            </span>
          </button>
          <button className=" flex flex-row items-center p-4 w-[178px] md:w-[256px] h-[56px]  rounded-lg= ">
            <img
              src={"./icon/Collection/computer-alt.svg"}
              alt="computer-alt.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[20px] leading-6 mdw-[]">
              Amet, fringilla
            </span>
          </button>
          <button className=" flex flex-row items-center p-4 w-[178px] md:w-[256px] h-[56px]  rounded-lg= ">
            <img
              src={"./icon/Collection/podcast.svg"}
              alt="podcast.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[20px] leading-6 mdw-[]">
              Amet nibh
            </span>
          </button>
          <button className=" flex flex-row items-center p-4 w-[178px] md:w-[256px] h-[56px]  rounded-lg= ">
            <img
              src={"./icon/Collection/settings-alt.svg"}
              alt="settings-alt.svg"
              className="w-[24px]"
            />

            <span className="py-0 px-4 font-medium text-[20px] leading-6 mdw-[]">
              Sed velit
            </span>
          </button>
        </div>

        <div className="flex relative flex-col items-start gap-[10px] isolate w-[361px] h-[259px] md:w-[944px] md:h-[556px]">
          <div
            className="flex flex-col items-center z-0 rounded-[20px] bg-white border-solid border-[5px] overflow-hidden"
            style={{
              boxShadow:
                "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)",
            }}
          >
            <div className="flex flex-row items-center py-2 px-4 isolate w-[294px] h-[41px] md:w-[759px]">
              <div className="flex flex-row items-start gap-[5px] ">
                <div className="w-[10px] h-[10px] bg-[#E11D48] rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-[#FBBF24] rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></div>
              </div>
            </div>
            <img
              src={"./Video.jpg"}
              alt="Video.jpg"
              className="w-[294px] h-[160px] md:w-[759px] md:h-[410px]"
            />
          </div>
          <div
            className="absolute flex flex-col items-center rounded-[20px] bg-white border-solid border-[5px] z-10 left-[36px] md:left-[94px] top-[57px] md:top-[105px] w-[295px] h-[202px] md:w-[759px] md:h-[451px] overflow-hidden"
            style={{
              boxShadow:
                "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)",
            }}
          >
            <div className="flex flex-row items-center py-2 px-4 isolate w-[294px] h-[41px] md:w-[759px]">
              <div className="flex flex-row items-start gap-[5px] ">
                <div className="w-[10px] h-[10px] bg-[#E11D48] rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-[#FBBF24] rounded-full"></div>
                <div className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></div>
              </div>
            </div>

            <img
              src={"./Picture (3).png"}
              alt="Picture (2).png"
              className="w-[294px] h-[160px] md:w-[759px] md:h-[410px]"
            />
          </div>
          <div
            className="absolute flex flex-col items-center rounded-[20px] bg-white border-solid border-[5px]  w-[94px] h-[105px] right-[5px] top-[121px] z-20 md:w-[256px] md:h-[286px] md:right-0 md:top-[202px] overflow-hidden"
            style={{
              boxShadow:
                "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)",
            }}
          >
            <img src={"./picture.jpeg"} alt="picture.jpeg" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
