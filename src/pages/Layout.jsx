import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Recent from "../components/Recent";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import { HiPlay, HiInformationCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Layout = () => {
  const [anime, setAnime] = useState([]);
  const [background, setBackground] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.consumet.org/anime/gogoanime/top-airing"
    );
    const json = await response.json();
    const results = json.results;
    const random = Math.floor(Math.random() * results.length);
    console.log(results);
    setAnime(json.results[random]);
  };

  return (
    <>
      <div className="relative ">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <div className="bg-gradient-to-b from-black/40 via-stone-900/95 to-stone-900 w-full absolute top-0 left-0 h-full -z-20"></div>
          <img
            src={anime.image}
            className="absolute top-0 left-0 w-full h-full object-cover -z-30"
          />
        </div>
        <Navbar />

        <div className="flex flex-col align-middle px-5 md:px-10 lg:px-[5vw] xl:px-[10vw] h-[80vh]">
          <div className="flex flex-col gap-6 m-auto pt-64">
            <h2
              className="text-4xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl"
              key={anime.title}
            >
              {anime.title}
            </h2>
            <p className="text-md font-medium text-white my-3 lg:w-3/4">
              {anime.description}
            </p>
            <div className="flex items-center gap-3">
              <button className="transition ease-in-out hover:bg-[#f61616] hover:text-white flex items-center gap-4 text-black bg-white px-7 py-3 rounded-md font-medium">
                <Link
                  to={"/watch/" + anime.id}
                  className="flex items-center gap-2"
                >
                  <HiPlay className="text-xl" />
                  Play
                </Link>
              </button>
              <button className="transition ease-in-out hover:bg-gray-700 flex items-center gap-4 text-white bg-gray-500 px-7 py-3 rounded-md font-medium">
                <HiInformationCircle className="text-xl" />
                Info
              </button>
            </div>
          </div>
        </div>
        <Trending />
        <Recent />
        <Popular />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
