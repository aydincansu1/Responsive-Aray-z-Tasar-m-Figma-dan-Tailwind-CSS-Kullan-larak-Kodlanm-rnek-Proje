const Video = () => {
  return (
    <section className="flex flex-col items-start py-8 px-4 md:py-40 md:px-20 w-[393px] md:w-[1440px] h-[689px] md:h-[816px] z-50 ">
      <div
        className="relative flex flex-col md:flex-row items-start md:items-center py-8 px-4 md:p-20 gap-8 md:gap-20 w-[361px] md:w-[1280px] h-[617px] md:h-[496px] bg-white rounded-[30px]"
        style={{
          boxShadow:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.07)",
        }}
      >
        <img
          src={"./Deco-video.svg"}
          alt="Deco-video.svg"
          className="absolute z-10 w-[440.18px] md:w-[713px] h-[386px] md:h-[625.24px] top-[298.8px] md:top-[-60.19px]  md:left-[605px]"
        />
        <div className="flex flex-col items-center md:items-start gap-6 w-[329px] md:w-[520px] h-[287px] md:h-[274px] z-10">
          <h1 className="font-bold md:font-extrabold text-[32px] md:text-[56px] leading-9 md:leading-[62px] text-[#0F172A]">
            Why join us
          </h1>
          <div className="flex flex-col items-start gap-2 w-[329px] md:w-[489px] h-[148px] md:h-[108px]">
            {[
              "Est et in pharetra magna adipiscing ornare aliquam.",
              "Tellus arcu sed consequat ac velit ut eu blandit.",
              "Ullamcorper ornare in et egestas dolor orci.",
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-2">
                <img src="./icon/check.svg" alt="check.svg" />
                <p className="font-normal text-lg md:text-xl leading-5 text-[#0F172A]">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <button className="flex flex-row justify-center items-center p-4 w-[179px] h-[56px] border-solid border-amber-900 border-2 rounded-lg">
            <span className="font-medium text-xl leading-6 text-amber-900">
              Sign up now
            </span>
          </button>
        </div>
        <div
          className="flex flex-col items-center w-[329px] md:w-[520px] h-[234px] md:h-[350px] bg-white border-solid border-white border-[5px] rounded-[20px] z-20 overflow-hidden "
          style={{
            boxShadow:
              "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)",
          }}
        >
          <div className="flex flex-row items-center py-2 px-4 gap-7 isolate w-[329px] md:w-[520px] h-[41pz]">
            <div className="gap-1 w-[297px] md:w-[488px] h-[10] flex flex-row items-start">
              <div className="w-[10px] h-[10px] bg-[#E11D48] rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-[#FBBF24] rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></div>
            </div>
          </div>
          <div className="relative flex flex-row justify-center items-center gap-[10px] w-[329px] md:w-[520px] h-[193px] md:h-[309px]">
            <img src={"./Video.jpg"} alt="Video.jpg" />

            <img className="absolute " src={"./play.svg"} alt="" />
          </div>
        </div>
        <div className=" absolute w-[49px] h-[49px] left-[59px] md:left-[750px] top-[13.2px] md:top-[373px] md:w-[85px] md:h-[85px] rounded-full z-30 bg-green-700 opacity-50"></div>
      </div>
    </section>
  );
};

export default Video;
