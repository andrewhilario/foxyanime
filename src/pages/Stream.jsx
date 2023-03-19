import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Stream = () => {
  const [episode, setEpisodes] = useState([]);
  const [stream, setStream] = useState([]);
  const { episodeId } = useParams();
  const fullScreen = document.querySelector(".jw-icon-fullscreen");

  useEffect(() => {
    fetchEpisode();

    if (fullScreen) {
      alert("Full screen");
    }
  }, []);

  const fetchEpisode = async () => {
    const url = "https://api.consumet.org/anime/gogoanime/watch/" + episodeId;
    const data = await fetch(url);
    const response = data.json();
    response.then((res) => {
      setStream(res?.headers?.Referer);
      console.log(res?.headers?.Referer);
    });
  };

  return (
    <>
      <Helmet>
        <title> | FoxyAnime.</title>
      </Helmet>
      <div className="block" id="content">
        <Navbar />
        <div className="flex flex-col items-center gap-5">
          <div className="block w-full h-[500px]">
            <iframe
              src={stream}
              className="w-full h-full object-contain"
            ></iframe>
          </div>
          <h1>
            
          </h1>
        </div>
      </div>
    </>
  );
};

export default Stream;
