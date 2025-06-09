import { footerList } from "../types/Types";
import { PiWavesBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="md:px-32 md:py-16 px-8 py-10 bg-black text-white ">
      <div className="flex md:flex-row flex-col justify-between items-center gap-y-4 border-b-2 md:pb-24 pb-6 border-white/40">
        <div className="gap-y-4 flex flex-col">
          <p className="md:text-6xl text-3xl md:w-4/7">
            Do you have any questions?
          </p>
          <p className="md:text-2xl text-base text-white/50">
            Feel free to send us your questions or request a free consultation.
          </p>
        </div>
        <button className="white-button font-semibold md:text-xl text-sm ">
          BOOK CONSULTATION
        </button>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between">
        <div className=" flex flex-col gap-y-10 md:w-2/5 md:mt-20 mt-5 md:text-base text-sm ">
          <div className="md:flex  md:gap-x-11 md:text-2xl text-lg ">
            {footerList.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col md:justify-between">
            <div className="gap-y-4 flex flex-col">
              <p className="text-white/70">SIGN UP</p>
              <p className="md:text-xl text-base tracking-widest">
                +1 890 123-52-61
              </p>
            </div>
            <div className="gap-y-4 flex flex-col">
              <p className="text-white/70">OPENING HOURS</p>
              <p className="md:text-xl text-base tracking-widest">24/7</p>
            </div>
          </div>
          <div className="gap-y-4 flex flex-col">
            <p className="text-white/70">EMAIL</p>
            <p className="md:text-xl text-base tracking-widest">
              ince52erkan@gmail.com
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:justify-end md:items-end gap-y-4 md:w-2/5 mt-20 md:mb-0 mb-14 ">
          <a
            href="/"
            className="text-2xl select-none flex gap-x-2 items-center font-semibold"
          >
            <PiWavesBold size={30} />
            <h1>PANTO</h1>
          </a>
          <p className="text-white/70 md:text-lg text-sm ">
            Implemented by Erkan INCE | Fueled by Coffee☕
          </p>
          <a
            href="https://erkanince.vercel.app/"
            className="text-white/70 md:text-xl text-base bg-white/20 rounded-4xl px-4 py-2 md:mr-0 mr-auto hover:bg-white/50 duration-500"
          >
            Click here to view my portfolio 👆
          </a>
          <p className="text-white/70">@2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
