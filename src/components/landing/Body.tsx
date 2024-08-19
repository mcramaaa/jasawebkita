import { BESTITEM } from "@/constants/appConstant";
import React from "react";
import SectionCard from "./components/SectionCard";

export default function Body() {
  return (
    <>
      <div className="flex mt-32 mx-4 lg:mx-72 flex-col gap-10">
        <div className="w-full flex flex-col justify-center">
          <h2 className="md:text-2xl text-xl gap-3 font-varella flex flex-col text-center">
            Bisnis anda dengan{" "}
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-full h-1 bg-brand-dark"></div>
            <p className="font-semibold w-fit text-nowrap text-brand-dark text-2xl md:text-4xl">
              <span className="text-brand">BBIZ</span> COMMERCE
            </p>
            <div className="w-full h-1 bg-brand-dark"></div>
          </div>
        </div>
      </div>
      <div className="bg-brand/5 py-5 mt-10 flex flex-col gap-7 lg:px-72 md:px-10 px-5">
        {BESTITEM.map((item, i) => (
          <SectionCard key={i} item={item} i={i} />
        ))}
      </div>
    </>
  );
}
