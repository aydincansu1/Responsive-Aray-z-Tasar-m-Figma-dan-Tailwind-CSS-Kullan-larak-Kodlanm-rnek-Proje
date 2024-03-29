import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

const Slider = ({ sliderData }) => {
  const splideRef = useRef(null);

  const goToNextSlide = () => {
    // İleriye git
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  const goToPrevSlide = () => {
    // Geriye git
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  Slider.defaultProps = {
    sliderData: [
      {
        logo: "./icon/ZoomerrLogo.png",
        companyName: "Zoomerr",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        image: "./users/2.jpeg",
      },
      {
        logo: "./icon/ZoomerrLogo.png",
        companyName: "Zoomerr",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        image: "./users/5.jpeg",
      },
      {
        logo: "./icon/Shels.png",
        companyName: "SHELLS",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        image: "./users/1.jpeg",
      },
      {
        logo: "./icon/ArtVenue.png",
        companyName: "ArtVenue",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        image: "./users/3.jpeg",
      },
      {
        logo: "./icon/Waves.png",
        companyName: "WAVES",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        image: "./users/4.jpeg",
      },
    ],
  };

  const Comment = ({ logo, companyName, text, image }) => (
    <div
      className="flex flex-col items-start p-6 md:p-8 gap-2 md:gap-4 z-10 isolate bg-white border-solid border-[1px] rounded-[20px] w-[319px] h-[296px] md:w-[384px] md:h-[430px]"
      style={{
        boxShadow:
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div className="flex items-center py-4 px-0 w-[271px] h-[64px] md:w-[320px] md:h-[61.2px] z-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
          <p className="font-bold text-[24px] leading-7 text-gray-600">
            {companyName}
          </p>
        </div>
      </div>
      <p className="font-normal text-[16px] md:text-[24px] leading-[22px] md:leading-[38px] text-black">
        {text}
      </p>
      <div className="flex items-center py-4 px-0 gap-4 w-[271px] h-[80px] md:w-[320px] md:h-[80px]">
        <img
          className="rounded-full w-[64px] h-[64px] object-cover"
          src={image}
          alt="User"
        />
        <div className="flex flex-col items-start w-[191px] md:w-[240px] h-[51px]">
          <span className="font-normal text-[18px] text-black leading-[29px]">
            Hellen Jummy
          </span>
          <span className="font-normal leading-[22px] text-[#475569]">
            Team Lead
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex relative flex-col justify-center items-start py-12 px-4 md:p-20 gap-8 md:gap-20 w-[393px] md:items-center md:w-screen h-[459px] md:h-[732px] z-[6] overflow-hidden">
      <div className="absolute md:w-[1360px] h-[277px] md:h-[421px] left-0 md:left-[calc(50%-680px)] right-0 top-[99px] md:top-[182px] z-0 bg-[#FDE68A]"></div>
      <div className="md:flex md:flex-row md:items-center md:gap-12 md:w-[1280px] md:h-[62px]">
        <div className="flex flex-col items-center md:items-start gap-8 w-[361px] md:w-[1112px] h-[25px] md:h-[62px] z-10">
          <h1 className="font-bold md:font-extrabold text-[32px] md:text-[56px] text-center z-10 text-[#0F172A] leading-9">
            Because they love us
          </h1>
        </div>
        <div className="hidden md:flex md:flex-row md:items-start md:gap-6 md:w-[120px] md:h-[48px] z-10">
          <button onClick={goToPrevSlide}>
            <img src={"./icon/Button.svg"} alt="" />
          </button>
          <button onClick={goToNextSlide}>
            <img src={"./icon/Button (1).svg"} alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:items-center relative z-20 gap-4 md:gap-6 w-[361pxpx] h-[296px] md:w-[1280px] md:h-[430px] ">
        <Splide
          ref={splideRef}
          options={{ rewind: true, perPage: 3, rewind: true, gap: "-90px" }}
        >
          {sliderData.map((comment, index) => (
            <SplideSlide key={index}>
              <Comment {...comment} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
