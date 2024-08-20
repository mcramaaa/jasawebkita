import React from "react";

import { ABOUTVALUE } from "@/constants/appConstant";
import { LuCheckCircle } from "react-icons/lu";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-3 lg:gap-10 justify-center items-center pt-32 mx-4 lg:mx-72">
      <div className="flex items-center p-3 justify-center bg-gradient-to-t from-white  via-brand/10  to-white rounded-3xl">
        <div className="w-full rounded-xl m-4"></div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-bold text-xl">{ABOUTVALUE.label}</h2>
        <ul className="flex flex-col gap-3">
          {ABOUTVALUE.value.map((value, i) => (
            <li
              key={i}
              className="flex text-sm lg:items-center lg:text-base gap-2"
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
