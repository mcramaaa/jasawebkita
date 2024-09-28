import React from "react";

import { ABOUTVALUE } from "@/constants/appConstant";
import { LuCheckCircle } from "react-icons/lu";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-3 group lg:gap-10 justify-center items-center pt-32 mx-4 lg:mx-20 xl:mx-72">
      <div className="flex items-center relative justify-center bg-gradient-to-t from-white  via-brand/10  to-white rounded-3xl overflow-hidden">
        <div className="w-3/4 rounded-xl relative aspect-square">
          <Image
            src={"/assets/about.png"}
            className="object-cover group-hover:scale-110 duration-500"
            alt=""
            fill
          />
        </div>
        <div className="bg-gradient-to-b from-white/0 to-white h-1/3 w-full absolute bottom-0"></div>
      </div>
      <div className="flex flex-col gap-2 justify-center font-montserrat">
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          <span className="font-bold text-brand-light">Pernahkah</span> Kamu Merasa :
        </h2>
        <ul className="flex flex-col gap-3">
          {ABOUTVALUE.value.map((value, i) => (
            <li
              key={i}
              className="flex text-xs lg:items-center lg:text-sm gap-2"
            >
              <LuCheckCircle className="text-brand" />
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
