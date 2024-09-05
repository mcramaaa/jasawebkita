  import React from "react";
  import { WiStars } from "react-icons/wi";

  export default function Ending() {
    return (
      <div className="mx-4 lg:mx-72 group mt-16">
        <h2 className="text-center flex text-sm lg:mx-40 text-brand-dark font-montserrat flex-col">
          <div className="flex flex-row justify-center">
            <WiStars size={80} className="group-hover:scale-110 duration-300"/>
              <span className="text-2xl lg:text-3xl font-bold ">
                Tak kenal maka tak sayang
              </span>
            <WiStars size={80} className="group-hover:scale-110 duration-300"/>
          </div>
          <span>Jangan ragu untuk ngobrol dan konsultasi sekarang.</span>{" "}
          <span>Jangan sampai kompetitormu yang take action duluan.</span>
        </h2>
      </div>
    );
  }
