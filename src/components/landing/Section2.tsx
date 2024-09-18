import { SECTION2 } from "@/constants/appConstant";
import React from "react";
import Accordion from "../accordion/Accordion";

export default function Section2() {
  return (
    <div className="relative flex flex-col items-center mt-20 mx-4 lg:mx-20 xl:mx-32">
      <h2 className="text-3xl flex-col md:flex-row font-montserrat md:text-5xl duration-1000 w-fit flex items-center text-brand font-bold gap-3 font-varella text-center">
        Bayangkan!
        <span className="font-normal text-2xl md:text-4xl">
          {" "}
          jika kamu bisa :{" "}
        </span>
      </h2>
      <div className="flex justify-center mt-10 gap-10 flex-wrap">
        {SECTION2.value.map((item, i) => (
          <Accordion
            key={i}
            label={item.label}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </div>
      <p className="mt-16 text-center text-lg lg:text-2xl">{SECTION2.desc}</p>
    </div>
  );
}
