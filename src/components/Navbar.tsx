import { useState } from "react";
import { navbarItems } from "../types/Types";

const Navbar = () => {
  const [active, setActive] = useState(0);
  return (
    <nav>
      <ul className="hidden md:flex gap-x-2 bg-white/20 px-1 py-1 shadow-md  rounded-full">
        {navbarItems.map((item, index) => (
          <p
            onClick={() => setActive(index)}
            className={`px-4 py-2 hover:cursor-pointer select-none rounded-xl md:rounded-full duration-500 ${
              active === index ? `bg-white  text-black` : `hover:bg-white/20`
            }`}
          >
            {item}
          </p>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
