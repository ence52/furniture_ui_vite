import { stepSectionList } from "../types/Types";

const StepsSection = () => {
  return (
    <section className="md:py-20 py-10 w-full md:px-32 px-8 ">
      <div className="flex flex-col   md:gap-y-10 gap-y-6">
        <p className=" md:text-6xl md:w-2/5 w-9/10  text-start text-4xl ">
          Transform Your Home In Three Easy Steps
        </p>
        <div className="flex md:flex-row flex-col gap-y-4 gap-x-8 w-full text-base">
          {stepSectionList.map((item, index) => (
            <div className="w-full  space-y-2">
              <div className="flex items-center gap-x-4">
                <div
                  className={`md:h-10 h-8 aspect-square border   justify-center flex items-center border-gray-500/40 rounded-lg ${
                    index === 0 && `bg-black text-white`
                  }`}
                >
                  0{index + 1}
                </div>
              </div>
              <p className="md:text-4xl text-2xl">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
              <img
                src={item.url}
                className="aspect-square w-full md:mt-14 mt-4 rounded-3xl object-cover object-center"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
