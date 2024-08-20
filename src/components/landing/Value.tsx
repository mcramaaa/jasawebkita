import { ADVANTAGE } from "@/constants/appConstant";
import React from "react";

export default function Value() {
  return (
    <>
      <div className="flex mt-32 mx-4 lg:mx-72 flex-col gap-10">
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold gap-3 font-varella text-center">
            Terintegrasi <span className="text-brand">dan</span> fleksibel{" "}
          </h2>
        </div>
      </div>
      <div className="grid mx-4 lg:mx-72 mt-10 md:grid-cols-3 gap-5 items-center justify-center">
        {ADVANTAGE.map((item, i) => (
          <div key={i} className="flex group gap-4 p-2">
            <p className="p-2 h-fit text-4xl border group-hover:scale-105 duration-300 rounded-lg border-brand-dark text-brand-dark">
              {item.icon}
            </p>
            <div className="font-varella flex flex-col gap-1">
              <p className=" font-semibold">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
