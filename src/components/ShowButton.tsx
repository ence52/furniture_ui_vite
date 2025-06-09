import React, { type ReactNode } from "react";
type ShowButtonProps = {
  icon: ReactNode;
  label: string;
  active: boolean;
};
const ShowButton: React.FC<ShowButtonProps> = ({ icon, label, active }) => {
  return (
    <button
      className={`flex md:gap-x-2 gap-x-[1px]  items-center md:text-xl text-xs ${
        active ? `black-button` : `white-button`
      }`}
    >
      {icon}
      <p> {label}</p>
    </button>
  );
};

export default ShowButton;
