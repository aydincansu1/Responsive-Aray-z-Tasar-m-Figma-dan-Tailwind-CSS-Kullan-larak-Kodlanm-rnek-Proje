import React from "react";

const Header = () => {
  return (
    <div className="  flex flex-row justify-between items-center p-4 md:py-6 md:px-20 gap-52 w-[393px] md:w-[1440px] h-[67px] md:h-[96px] z-10  text-amber-900 ">
      <h1 className="text-3xl font-bold leading-9">Collers</h1>

      <nav className="hidden md:flex flex-row items-center gap-4 order-1">
        {["Products", "Solutions", "Pricing", "Resources", "Log In"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-row items-center py-3 px-2 gap-2 self-stretch"
            >
              <span className="inline-block font-medium text-base tracking-wide">
                {item}
              </span>
            </a>
          )
        )}
        <a href="#" className="flex flex-row justify-center items-center p-3">
          <button className="border-2 rounded-lg border-[#78350F] p-3">
            <span className="font-medium text-base">Sign up now</span>
          </button>
        </a>
      </nav>

      <img
        src="./icon/menu-scale.svg"
        className="w-6 h-6 md:hidden"
        alt="menu-icon"
      />
    </div>
  );
};

export default Header;
