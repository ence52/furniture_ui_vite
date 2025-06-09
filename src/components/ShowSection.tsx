import "swiper/swiper.min.css";
import { FaCouch, FaPlus } from "react-icons/fa";
import ShowButton from "./ShowButton";
import { PiOfficeChair } from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowSlider from "./ShowSlider";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const ShowSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      style={{ backgroundColor: "#ECEBE6" }}
      className="md:py-20 py-4 w-full"
    >
      <div className="flex flex-col items-center  md:gap-y-10 gap-y-2">
        <p className=" md:text-6xl md:w-1/2 w-3/4 text-center text-xl">
          See How We've Transformed Spaces Into Beautiful Works Of Art
        </p>
        <div className="flex flex-row justify-between  md:w-1/2 w-full">
          <ShowButton active={true} label="Living Room" icon={<IoBed />} />
          <ShowButton active={false} label="Bedroom" icon={<FaCouch />} />
          <ShowButton
            active={false}
            label="Office Workspace"
            icon={<PiOfficeChair />}
          />
          <ShowButton active={false} label="Explore More" icon={<FaPlus />} />
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.4}
          grabCursor={true}
          className="w-full"
          centeredSlides
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {[...Array(4)].map((_, i) => {
            const isActive = i === activeIndex;
            const isPrev = i === activeIndex - 1;
            const isNext = i === activeIndex + 1;

            let className = "slide-item transition-all duration-300";

            if (isActive) {
              className += " scale-100 rounded-3xl";
            } else if (isPrev || isNext) {
              className += " scale-90 rounded-3xl";
            } else {
              className += " scale-75 rounded-3xl";
            }

            return (
              <SwiperSlide key={i} className={`${className}`}>
                <ShowSlider />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="flex justify-center mt-6 space-x-3">
          {[...Array(4)].map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={`md:w-4 md:h-4 h-3 w-3 md:p-[2px] p-[1px] rounded-full transition-colors cursor-pointer ${
                i === activeIndex
                  ? "border-2 border-black"
                  : " border-2 border-gray-400"
              }`}
            >
              {i === activeIndex && (
                <div className="bg-black w-full h-full rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowSection;
