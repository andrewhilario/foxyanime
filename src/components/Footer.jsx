import React from "react";
import Logo from "../assets/FOXYANIME.png";

const Footer = () => {
  return (
    <>
      <div className=" border-t-2 border-gray-400 bg-stone-900 ">
        <div className="w-full flex flex-col items-center md:flex-row-reverse md:justify-between md:px-10 lg:px-[10vw] xl:px-[20vw] md:py-10">
          <a href="" className="flex justify-center py-4 items-center ">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <img src={Logo} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-semibold text-[#FF1616] md:text-5xl lg:text-6xl">
              FoxyAnime.
            </h1>
          </a>
          <div className="flex flex-col py-4 gap-4 ">
            <h1 className="text-2xl font-semibold text-white pb-4">
              Quick Links
            </h1>
            <div className="flex flex-col items-center gap-5 py-4">
              <a href="" className="text-lg font-medium text-white">
                Trending Anime
              </a>
              <a href="" className="text-lg font-medium text-white">
                Recent Anime
              </a>
              <a href="" className="text-lg font-medium text-white">
                Popular Anime
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-400">
          <p className="text-center text-md py-5 text-white">
            Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
