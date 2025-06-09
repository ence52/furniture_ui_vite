import { useState } from "react";

const ShowBeforeAfter = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="shadow-xl backdrop-blur-xl bg-white/20  px-1 py-1 border overflow-hidden border-white rounded-full flex-row flex gap-x-2  ">
      {["Before", "After"].map((item, index) => (
        <button
          onClick={() => setActive(index)}
          className={`px-4 py-1  rounded-full  duration-500  select-none ${
            active === index ? `bg-white` : `hover:bg-white/20`
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ShowBeforeAfter;
