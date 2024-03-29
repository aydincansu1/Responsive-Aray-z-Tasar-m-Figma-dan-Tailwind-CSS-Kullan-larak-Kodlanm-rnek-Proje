import React from "react";

const Content = () => {
  const items = [
    {
      icon: "./icon/Rectangle 25.svg",
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      icon: "./icon/Rectangle 26.svg",
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      icon: "./icon/Rectangle 27.svg",
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
  ];
  return (
    <section className="z-0 m-0  flex flex-col justify-center items-center py-12 px-4 md:p-20 gap-8 md:gap-20  isolate md:isolation-auto w-[393px] md:w-[1440px] h-[875px] md:h-[365px] order-3  bg-amber-100 md:bg-opacity-0  ">
      <div className="md:flex md:flex-row md:items-start md:gap-20 md:w-[1280px] md:h-[205px] ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mb-8 items-start isolate z-20 p-0  gap-[10px] w-[361px] h-[205px] self-stretch  relative flex-grow-1"
          >
            <img
              src={item.icon}
              alt=""
              className="absolute left-[165px] md:left-[25px]  z-0"
            />
            <div className="flex flex-col  text-gray-900 items-center md:items-start isolate z-10 gap-4 w-[373px] h-[205px] self-stretch">
              <img src="./icon/trophy.svg" alt="" />
              <h1 className="font-medium text-[20px] text-center">
                {item.title}
              </h1>
              <p className="text-lg font-normal text-center md:text-start order-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
