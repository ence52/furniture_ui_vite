import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { heroPhotoList } from "../types/Types";
import { HiOutlineCube } from "react-icons/hi";

import hero from "../assets/images/hero.png";
import { PiWavesBold } from "react-icons/pi";
import Navbar from "./Navbar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";
const Hero = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <section
      className="w-full md:h-screen aspect-[4/7] bg-cover bg-center contrast-125 text-white"
      style={{ backgroundImage: `url(${hero}` }}
    >
      <div className=" h-full flex-col flex relative md:text-base text-sm bg-black/30 md:px-32 px-8 md:py-4">
        <div className="w-full  font-semibold flex flex-col gap-y-4">
          <div className="flex flex-row justify-between items-center w-full gap-y-4 pt-6 md:pt-0  ">
            <a
              href="/"
              className="text-2xl select-none flex gap-x-2 items-center "
            >
              <PiWavesBold size={30} />
              <h1>PANTO</h1>
            </a>
            <Navbar />

            <button className="px-4 py-2 hover:cursor-pointer rounded-full md:flex hidden items-center gap-x-2 bg-black ">
              <HiOutlineCube size={22} />
              <p> Design Yours</p>
            </button>

            {menuActive ? (
              <IoMdClose
                onClick={() => setMenuActive(false)}
                size={28}
                className="block md:hidden"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setMenuActive(true)}
                size={28}
                className="block md:hidden"
              />
            )}
          </div>
          {menuActive && (
            <div className="space-y-4">
              <MobileNavbar />
              <button className="px-4 py-2 hover:cursor-pointer rounded-full flex md:hidden items-center gap-x-2 bg-black ">
                <HiOutlineCube size={22} />
                <p> Design Yours</p>
              </button>
            </div>
          )}
        </div>
        <div className="flex-grow w-full justify-center flex  md:pt-44 pt-4">
          <div
            className={`flex flex-col justify-between md:py-0  ${
              menuActive ? `py-2` : `py-20`
            }`}
          >
            <div className="gap-y-4 flex flex-col items-center">
              <h1 className="md:text-7xl text-4xl md:w-3xl w-4/5 text-center font-semibold">
                Crafting Your Dream Space, Inside And Out
              </h1>
              <p className="md:text-lg text-sm md:w-2xl w-sm text-center font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente omnis molestias reprehenderit facilis. Maiores ex
                aperiam asperiores omnis labore! Reiciendis?
              </p>
              <div className="flex flex-row gap-x-4 font-semibold md:mt-4">
                <button className="black-button flex flex-row items-center gap-x-2 ">
                  <HiOutlineCube size={22} />
                  <span>Design Yours</span>
                </button>
                <button className=" white-button ">How it works</button>
              </div>
            </div>
            <div className="md:gap-y-6 gap-y-2 flex flex-col items-center text-base ">
              <p>Over 300 spaces uniquely designed</p>
              <div className="flex  md:h-24 h-16 md:gap-x-2 gap-x-[2px] md:p-2 p-[2px] rounded-lg bg-white/30">
                {heroPhotoList.map((item) => (
                  <div
                    className="h-full aspect-square bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${item}` }}
                  />
                ))}
              </div>
              <button className="border border-white hover:cursor-pointer hover:bg-white/20 duration-500 px-4 py-2 rounded-full flex  items-center gap-x-2">
                <p> View all projects</p>

                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
