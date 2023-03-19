import React, { useState } from "react";
import Logo from "../assets/FOXYANIME.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleClick = () => setNav(!nav);
  const [isLoading, setIsLoading] = useState(true);

  const notify = () => toast.success("Signout completed");

  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      setIsLoading(false);
      await logOut();
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex flex-col justify-between items-center max-w-full ">
      <div
        className={
          location.pathname === "/"
            ? !nav
              ? "flex justify-between items-center w-full bg-transparent  px-5 md:px-10 lg:px-[10vw] xl:px-[20vw]"
              : "flex justify-between items-center w-full bg-white px-5 md:px-10 lg:px-[10vw] xl:px-[20vw]"
            : "flex justify-between items-center w-full bg-stone-800  px-5 md:px-10 lg:px-[10vw] xl:px-[20vw]"
        }
      >
        <a
          href="/"
          id="brand"
          className="flex items-center py-5 drop-shadow-lg"
        >
          <div className="w-12 h-12">
            <img src={Logo} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-[#FF1616]">FoxyAnime.</h1>
        </a>
        <ul className="hidden md:flex items-center gap-4 text-white">
          <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-md">
            Trending Anime
          </li>
          <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-md">
            Popular Anime
          </li>
          <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-md">
            Recent Anime
          </li>
          <div className="flex items-center justify-between gap-4">
            {user?.displayName ? (
              <>
                <div className="flex items-center gap-5">
                  <div className="w-8 h-8 rounded-full">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h1 className="font-medium text-md">{user?.displayName}</h1>
                </div>
                <button
                  onClick={handleGoogleSignOut}
                  className="transition ease-in-out hover:text-[#FF1616] text-md px-4 py-6"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="transition ease-in-out hover:text-[#FF1616] text-md px-4 py-6"
              >
                Login
              </button>
            )}
          </div>
        </ul>
        <button
          onClick={handleClick}
          className="md:hidden transition ease-in-out text-4xl text-[#FF1616] drop-shadow-lg"
        >
          {!nav ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
        </button>
      </div>
      <ul
        className={
          location.pathname === "/"
            ? !nav
              ? "hidden"
              : "transition ease-in-out flex flex-col text-red-500 w-full gap-2 px-6 pb-5 bg-white"
            : !nav
            ? "hidden"
            : "transition ease-in-out flex flex-col text-red-500 w-full gap-2 px-6 pb-5 bg-stone-800"
        }
      >
        <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-xl">
          <Link to="/#trending">Trending Anime</Link>
        </li>
        <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-xl">
          Popular Anime
        </li>
        <li className="transition ease-in-out cursor-pointer py-5 hover:text-[#FF1616] font-medium text-xl">
          Recent Anime
        </li>
        <div className="flex flex-col items-center justify-between gap-4">
          {user?.displayName ? (
            <>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1 className="text-xl font-semibold">{user?.displayName}</h1>
              </div>
              <button
                onClick={handleGoogleSignOut}
                className="transition ease-in-out hover:text-[#FF1616] text-xl w-full border-2 border-[#F61616] rounded-lg py-3"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              className="transition ease-in-out hover:text-[#FF1616] text-xl w-full border-2 border-[#F61616] rounded-lg py-3"
            >
              Login
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
