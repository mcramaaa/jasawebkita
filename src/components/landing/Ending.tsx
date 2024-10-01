import React from "react";
import { WiStars } from "react-icons/wi";

export default function Ending() {
  return (
    <div className="relative  bg-gradient-to-l from-brand-dark to-brand">
      <div className="absolute inset-x-0 bg-white h-1/2 " aria-hidden="true" />
        <div className="relative mx-4 lg:mx-72 py-10 lg:py-20 group mt-16 shadow-xl bg-white rounded-[3.125rem]">
          <h2 className="text-center flex text-sm lg:mx-40 text-brand-dark  font-montserrat flex-col">
            <div className="flex items-center text-center justify-center gap-3 text-brand">
              <WiStars className="group-hover:scale-110 text-6xl duration-300" />
                <span className="text-2xl lg:text-5xl font-bold ">
                  Tak kenal maka tak sayang
                </span>
              <WiStars className="group-hover:scale-110 text-6xl duration-300" />
            </div>
          <span className="text-sm lg:text-lg mt-10">Jangan ragu untuk ngobrol dan konsultasi sekarang.</span>{" "}
          <span className="text-sm lg:text-lg">Jangan sampai kompetitormu yang take action duluan.</span>
        </h2>
      </div>
    </div>
  );
}
