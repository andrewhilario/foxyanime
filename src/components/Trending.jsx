import React, { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [trTitle, setTrTitle] = useState("");
  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const data = await fetch(
      "https://api.consumet.org/anime/gogoanime/top-airing"
    );
    const json = await data.json();
    // console.log(json);
    setTrending(json.results);
    console.log(json.results);
    // console.log(json.results?.title?.english);
    // console.log(JSON.stringify(json.results));
  };
  return (
    <>
      <div
        id="trending"
        className="flex flex-col gap-4 px-5 bg-stone-900 py-4 lg:px-[5vw] xl:px-[10vw]"
      >
        <h1 className="text-2xl font-medium text-white">Trending Anime</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {trending.map((trending, index) => {
            return (
              <a
                className="flex flex-col items-center"
                href={`/watch/${trending.id}`}
                key={index}
              >
                <div className="w-full h-[200px] sm:h-[350px] overflow-hidden">
                  <img
                    src={trending?.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p
                  className="text-center font-medium text-md md:text-lg py-3 text-white"
                  key={trending.title}
                >
                  {trending?.title}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trending;
