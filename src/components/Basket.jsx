import React from "react";

const Basket = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-start py-12 px-4 gap-8  md:gap-20 md:p-20    isolate  text-white md:w-[1440px] h-[1739px] md:h-[776px] bg-[#0F172A] border-2 border-blue-200 z-40">
      <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-8 md:gap-20 t w-[362px] md:w-[1280px] h-[131px] md:h-[64px]">
        <h1 className="font-bold md:font-extrabold text-[32px] md:text-[56px] leading-9 md:leading-[62px] flex-grow-1">
          The best of the best
        </h1>
        <button className="flex flex-row justify-center items-center border-white border-2 rounded-lg py-5 px-6 w-[233px] md:w-[233px] h-[64px]">
          Sign up now
        </button>
      </div>

      <div className="flex relative flex-col md:flex-row md:items-start gap-12 md:gap-12 md:isolate md:w-[1280] md:h-[472]">
        <div className="sheplerr absolute md:w-[1358px] md:h-[527px] md:rotate-0 md:left-[-35px] md:top-[-31px] md:z-0 w-[1012px] h-[385px] left-[-329px] rotate-90 top-[513px] z-0">
          <img src={"./Backlights/Backlights.svg"} alt="" />
        </div>

        <div
          className=" flex flex-col items-center isolate  w-[361px] md:w-[394px]  h-[472px] md:h-[472px]  bg-[#0F172A] border-2 border-[#0F172A] rounded-lg z-20 "
          style={{
            boxShadow:
              "0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07)",
          }}
        >
          <img
            src={"./Picture (2).png"}
            alt="Picture (2).png"
            className="w-[361px] md:w-[394px] h-[220px] object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="flex flex-col items-start py-8 px-8 gap-4 z-10 w-[361px] md:w-[394px] h-[132px] ">
            <h1 className="font-bold text-2xl leading-7">Title</h1>
            <p className="font-normal  text-lg leading-7">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center  gap-4 w-[361px] md:w-[384px] h-[120px] z-20 order-2">
            <button className="flex flex-row justify-center items-center gap-4 w-[297px] md:w-[330.67px] h-[56px] border-2 rounded-lg">
              <img
                src={"./icon/shopping-cart.svg"}
                alt="shopping-cart"
                className="w-[24px] h-[24px] "
              />
              <span className="font-medium text-20px leading-6">Buy Now</span>
            </button>
          </div>
        </div>

        <div
          className=" flex flex-col items-center isolate  w-[361px] md:w-[394px]  h-[472px] md:h-[472px]  bg-[#0F172A] border-2 border-[#0F172A] rounded-lg z-20 "
          style={{
            boxShadow:
              "0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07)",
          }}
        >
          <img
            src={"./Picture (3).png"}
            alt="Picture (2).png"
            className="w-[361px] md:w-[394px] h-[220px] object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="flex flex-col items-start py-8 px-8 gap-4 z-10 w-[361px] md:w-[394px] h-[132px] ">
            <h1 className="font-bold text-2xl leading-7">Title</h1>
            <p className="font-normal  text-lg leading-7">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center  gap-4 w-[361px] md:w-[384px] h-[120px] z-20 order-2">
            <button className="flex flex-row justify-center items-center gap-4 w-[297px] md:w-[330.67px] h-[56px] border-2 rounded-lg">
              <img src={"./icon/shopping-cart.svg"} alt="" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>

        <div
          className=" flex flex-col items-center isolate  w-[361px] md:w-[394px]  h-[472px] md:h-[472px]  bg-[#0F172A] border-2 border-[#0F172A] rounded-lg z-20 "
          style={{
            boxShadow:
              "0px 25px 50px -12px rgba(255, 255, 255, 0.25), 0px 0px 15px rgba(255, 255, 255, 0.07)",
          }}
        >
          <img
            src={"./Picture (4).png"}
            alt="Picture (2).png"
            className="w-[361px] md:w-[394px] h-[220px] object-cover rounded-tl-lg rounded-tr-lg"
          />
          <div className="flex flex-col items-start py-8 px-8 gap-4 z-10 w-[361px] md:w-[394px] h-[132px] ">
            <h1 className="font-bold text-2xl leading-7">Title</h1>
            <p className="font-normal  text-lg leading-7">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center  gap-4 w-[361px] md:w-[384px] h-[120px] z-20 order-2">
            <button className="flex flex-row justify-center items-center gap-4 w-[297px] md:w-[330.67px] h-[56px] border-2 rounded-lg">
              <img src={"./icon/shopping-cart.svg"} alt="" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
