import React, { useEffect, useState } from "react";
import Logo from "../assets/FOXYANIME.png";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const [background, setBackground] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.consumet.org/meta/anilist/random-anime"
    );
    const json = await response.json();
    setBackground(json.cover);
  };
  return (
    <>
      <Helmet>
        <title>Login | FoxyAnime.</title>
      </Helmet>
      <div className="max-w-screen h-screen relative">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <div className="bg-stone-900/70 w-full absolute top-0 left-0 h-full -z-20"></div>
          <img
            src={background}
            className="absolute top-0 left-0 w-full h-full object-cover -z-30"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center w-full bg-gray-100 mx-5 rounded-xl shadow-lg md:mx-20 lg:mx-52 xl:mx-[40rem]">
            <div className="flex justify-center items-center">
              <div className="w-20 h-20 my-5 md:w-36 md:h-36">
                <img src={Logo} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-semibold text-[#F61616] md:text-4xl">
                FoxyAnime.Login
              </h1>
            </div>
            <form className="w-full px-10 flex flex-col items-center gap-4 py-5">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor=""
                  className="flex items-center gap-3 text-[#F61616] text-xl font-medium"
                >
                  <HiOutlineUser /> Username
                </label>
                <input
                  className="border-2 border-[#F61616] p-2 rounded-md focus:border-[#F61616] focus:outline-none border-transparent  focus:ring-0"
                  type="text"
                  name="name"
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor=""
                  className="flex items-center gap-3 text-[#F61616] text-xl font-medium"
                >
                  <MdOutlinePassword /> Password
                </label>
                <input
                  className="border-2 border-[#F61616] p-2 rounded-md focus:border-[#F61616]  focus:outline-none border-transparent  focus:ring-0"
                  type="password"
                  name="name"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <input
                  className="mt-7 p-2 rounded-md focus:border-[#F61616]  focus:outline-none border-transparent bg-[#f61616] text-white cursor-pointer focus:ring-0 md:text-xl"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-sm text-center font-medium py-4 px-10 md:text-lg">
              <a href="" className="text-red-500">
                <Link to="/signup">Create your account</Link>
              </a>{" "}
              and enjoy the ultimate anime streaming experience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
