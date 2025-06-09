import { HiOutlineCube } from "react-icons/hi";
import { secondSectionList } from "../types/Types";
import { TfiArrowTopRight } from "react-icons/tfi";
const SecondSection = () => {
  return (
    <section className=" md:px-32 md:py-24 px-8 py-6  bg-white text-black  ">
      <div className="md:grid flex flex-col md:grid-cols-7 md:grid-rows-5 gap-6 h-3/4">
        <div className="row-span-1 col-span-4">
          <p className="md:w-xl md:text-6xl text-2xl ">
            Bringing Timeless Elegance and Natural Beauty to Your Space
          </p>
        </div>
        <div className="row-span-1 col-span-3 flex flex-col md:gap-y-10 gap-y-4 ">
          <p className="text-gray-500 md:text-3xl text-sm">
            Creating spaces that blend classic elegance with the serenity of
            nature, for a home or office that feels both refined and harmonious.
          </p>
          <button className="mr-auto text-xs md:text-xl text-white  md:px-6 md:py-3 px-3 py-[6px] hover:cursor-pointer rounded-full flex items-center gap-x-2 bg-black ">
            <HiOutlineCube size={22} />
            <p> Design Yours</p>
          </button>
        </div>
        {secondSectionList.map((item, index) => (
          <div
            className={`  bg-cover  rounded-4xl text-white ${
              index === 0 ? `row-span-4 col-span-4` : `row-span-2 col-span-3`
            }`}
            style={{ backgroundImage: `url(${item.url}` }}
          >
            <div className="flex flex-col rounded-4xl bg-black/20 h-full w-full md:p-10 p-4 justify-between gap-y-4">
              <div className="md:h-16 md:w-16 h-10 w-10 rounded-full bg-white ml-auto text-black flex justify-center items-center text-xl md:text-2xl">
                <TfiArrowTopRight className="border-b-2  border-black" />
              </div>
              <div className="mt-24">
                <p className="md:text-4xl text-xl font-semibold">
                  {item.title}
                </p>
                {index === 0 && (
                  <p className="md:text-3xl text-base w-5/6 font-light md:leading-10 leading-5">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
