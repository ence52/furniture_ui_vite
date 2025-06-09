import ShowBeforeAfter from "./ShowBeforeAfter";
import hero from "../assets/images/hero.png";
const ShowSlider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${hero}` }}
      className="w-full  md:aspect-[18/9] aspect-video bg-cover md:text-lg text-xs  rounded-3xl flex flex-col md:py-10 py-2 items-center justify-between"
    >
      <div className="pr-4 pl-1 bg-white ml-auto rounded-l-full gap-x-2 md:py-2 flex items-center">
        <div
          className="md:h-8 h-4 aspect-square bg-green-800 rounded-full bg-cover"
          style={{
            backgroundImage: `url(https://www.gamereactor.com.tr/media/35/petergriffinis_4373513b.jpg`,
          }}
        ></div>
        Designed for Peter Griffin
      </div>
      <ShowBeforeAfter />
    </div>
  );
};

export default ShowSlider;
