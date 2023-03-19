import React, { useEffect, useState } from "react";

const Recent = () => {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetchRecent();
  }, []);

  const fetchRecent = async () => {
    const response = await fetch(
      "https://api.consumet.org/meta/anilist/recent-episodes"
    );
    const json = response.json();
    json.then((result) => {
      setRecent(result.results);
      console.log(result.results);
      // console.log(JSON.stringify(result.results));
    });
  };

  return (
    <>
      <div
        id="recent"
        className="flex flex-col gap-4 px-5 bg-stone-900 py-4 md:px-10 lg:px-[5vw] xl:px-[10vw]"
      >
        <h1 className="text-2xl font-medium text-white">Recent Anime</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {recent.map((rec, index) => {
            return (
              <a className="flex flex-col items-center" href="" key={index}>
                <div className="w-full h-[350px] overflow-hidden">
                  <img
                    src={rec.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p
                  className="text-center font-medium text-lg pt-3 text-white"
                  key={rec.id}
                >
                  {rec?.title?.english}
                </p>
                <p className="text-center font-medium text-lg pt-3 text-white">
                  EP {rec?.episodeNumber}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recent;
