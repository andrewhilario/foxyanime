import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import axios from "axios";

import { useParams } from "react-router-dom";

const Watch = () => {
  const [title, setTitle] = useState([]);
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [genres, setGenres] = useState([]);
  // console.log(id);

  useEffect(() => {
    setTitle(id);
    fetchAnimeInfo();
    console.log(title);
    getEpisodes();
  }, []);

  const fetchAnimeInfo = async () => {
    const url = "https://api.consumet.org/anime/gogoanime/info/" + id;
    const data = await fetch(url);
    const response = data.json();
    response.then((res) => {
      setAnimeInfo(res);
      console.log(res);
    });
  };

  const getEpisodes = async () => {
    const url = "https://api.consumet.org/anime/gogoanime/info/" + id;

    const data = await fetch(url);
    const response = data.json();
    response.then((res) => {
      console.log(res);
      const ep = res.episodes;
      setEpisodes(ep);
    });
  };

  return (
    <>
      <Helmet>
        <title>Watch | FoxyAnime.</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="w-screen h-[300px] relative">
          <img
            src={animeInfo?.image}
            alt=""
            className="w-full h-full m-auto object-contain"
          />
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/80"></div>
          <img
            src={animeInfo?.image}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          />
        </div>
        <h1 className="text-4xl font-semibold text-center px-5 md:px-10 lg:px-[10vw] xl:px-[20vw]">
          {animeInfo?.title}
        </h1>
        <div className="text-md md:text-lg font-medium py-4 px-8 md:px-10 lg:px-[10vw] xl:px-[20vw] ">
          <p>{animeInfo.description}</p>
        </div>
        <h1 className="text-3xl font-semibold px-8 md:px-10 lg:px-[10vw] xl:px-[20vw] ">
          Other Details:
        </h1>
        <div className="flex flex-col  py-5 md:flex-row md:gap-[25rem] gap-4 px-8 md:px-10 lg:px-[10vw] xl:px-[20vw]">
          <div className="flex flex-col gap-4">
            <p className="text-md font-medium">
              Episodes: {animeInfo.totalEpisodes}
            </p>
            <p className="text-md font-medium">
              Duration: {animeInfo.duration}
            </p>
            <p className="text-md font-medium">
              Studios:{" "}
              {animeInfo?.studios?.map((studio, index) => {
                return <span key={index}>{studio}</span>;
              })}
            </p>
            <p className="text-md font-medium">Status: {animeInfo.status}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-md font-medium capitalize">
              Sub or Dub: {animeInfo.subOrDub}
            </p>
            <p className="text-md font-medium capitalize">
              Season: {animeInfo.season}
            </p>
            <p className="text-md font-medium flex-wrap">
              Genres:{" "}
              {animeInfo?.genres?.map((genres, index) => {
                return <span key={index}>{genres + ", "}</span>;
              })}
            </p>
            <p className="text-md font-medium">
              {/* Broadcast: {animeInfo?.broadcast?.string} */}
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-semibold px-8 md:px-10 lg:px-[10vw] xl:px-[20vw] pb-5">
          Episodes:
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 items-center px-8 md:px-10 lg:px-[10vw] xl:px-[20vw] pb-5">
          {episodes.map((ep, index) => {
            return (
              <>
                <a
                  href={`/stream/${ep.id}`}
                  key={index}
                  className="text-md font-semibold text-center w-full h-full px-3 py-4 text-white bg-stone-700 rounded-lg"
                >
                  EP {ep.number}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Watch;
