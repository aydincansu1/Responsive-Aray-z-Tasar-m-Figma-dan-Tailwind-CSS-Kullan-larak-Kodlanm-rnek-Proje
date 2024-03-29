const Main = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-start md:items-center py-12 px-4 md:p-20 w-[393px] md:w-[1440px] h-[802px] md:h-[583px] order-2 z-20 flex-none self-stretch gap-8 md:gap-20">
      <div className="flex flex-col items-center md:items-start gap-8 md:gap-12 w-[361px] md:w-[714px] h-[360px] md:h-[257px] grow md:grow-0">
        <h1 className="text-[#0F172A] text-[56px] text-center md:text-start md:text-[72px] font-extrabold leading-[62px] md:leading-[79px]">
          Collectible Sneakers
        </h1>
        <p className="font-normal text-[18px] text-[#0F172A] text-center md:text-start leading-7">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="text-amber-900 flex flex-row justify-center items-center gap-4 order-2 w-[347px]">
          <button className="w-[179px] h-[56px] border-2 border-solid border-amber-800 rounded-lg font-medium py-0 px-4 md:px-2 text-[20px]">
            Sign up now
          </button>
          <button className="justify-center items-center w-[179px] h-[56px]">
            <img
              className="absolute w-[24px]  h-[24px]"
              src="./icon/play-circle.svg"
              alt=""
            />
            <span className="py-0 px-[8px]"> Watch Demo</span>
          </button>
        </div>
      </div>

      <div className="relative w-[361px] md:w-[486px] h-[314px] md:h-[423px] z-0">
        <img
          className="absolute w-[361px] md:w-[486px] h-[288px] md:h-[388px] left-[16px]  "
          src="./RayPiedra.png"
          alt="Ray Piedra"
        />
        <div className="flex flex-row justify-center items-center bg-[#FBBF24] w-[272.61px] md:w-[367px] h-[276.32px] md:h-[372px] rounded-[50px] top-[477px] md:top-[131px] left-[53px] md:left-[925px] gap-3 " />
      </div>
    </main>
  );
};

export default Main;
