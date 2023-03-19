import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const response = await fetch(
      "https://api.consumet.org/meta/anilist/popular"
    );
    const json = response.json();
    json.then((res) => {
      setPopular(res.results);
      console.log(res.results);
    });
  };
  return (
    <>
      <div
        id="popular"
        className="flex flex-col gap-4 px-5 bg-stone-900 py-4 md:px-10 lg:px-[5vw] xl:px-[10vw]"
      >
        <h1 className="text-2xl font-medium text-white">Popular Anime</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {popular.map((popular) => {
            return (
              <a
                className="flex flex-col items-center"
                href=""
                key={popular.id}
              >
                <div className="w-full h-[350px] overflow-hidden">
                  <img
                    src={popular.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p
                  className="text-center font-medium text-lg pt-3 text-white"
                  key={popular.title}
                >
                  {popular?.title?.userPreferred}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
