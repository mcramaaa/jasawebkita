import React from "react";

import { ABOUTVALUE } from "@/constants/appConstant";
import { LuCheckCircle } from "react-icons/lu";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-brand-bone" >
      <div className="items-center justify-center text-center mt-16">
        <h2 className="text-xl md:text-2xl lg:text-5xl pt-16 font-montserrat text-brand">
          Pernahkah <span className="font-bold ">Kamu Merasa :</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-3 group lg:gap-10 justify-center items-center pt-8 pb-16 mx-4 lg:mx-20 xl:mx-72">
        <div className="flex items-center relative justify-center ">
          <div className="w-3/4 rounded-xl relative aspect-square z-10">
            <Image
              src={"/assets/1.png"}
              className="object-cover group-hover:scale-110 duration-500"
              alt=""
              fill
            />
          </div>
          <div className="bg-white h-1/2 w-full absolute bottom-0 rounded-3xl z-0"></div>
        </div>
        <div className="flex flex-col gap-2 justify-center font-montserrat">
          <ul className="flex flex-col gap-4">
            {ABOUTVALUE.value.map((value, i) => (
              <li
                key={i}
                className="flex text-xs lg:items-center md:text-sm lg:text-sm gap-2"
              >
                <LuCheckCircle className="text-brand" />
                <p >{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
