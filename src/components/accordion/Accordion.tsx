import React, { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  label: string;
  icon: ReactNode;
  desc: string;
}

export default function Accordion(props: IProps) {
  const { label, icon, desc } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" bg-white rounded-lg h-full duration-500 drop-shadow-lg w-80 lg:w-[400px] p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full">
          <div className="flex h-14 gap-4 items-center">
            <p className="text-3xl">{icon}</p>
            <h3 className="text-start w-full">{label}</h3>

            <p
              className={`${!isOpen ? "rotate-0" : "rotate-180"} duration-300`}
            >
              <IoIosArrowDown className={` animate-bounce`} />
            </p>
          </div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-3 py-3 border-t"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className={`text-sm overflow-hidden`}>{desc}</p>
        </div>
      </div>
    </>
  );
}
