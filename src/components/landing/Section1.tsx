import { SECTION1 } from "@/constants/appConstant";
import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="bg-brand-bone relative mt-32">
      <div className="z-20 top-0 rotate-180 w-full">
        <div className="relative w-full aspect-[9/1]">
          <Image
            alt=""
            className="bottom-0 absolute object-cover"
            fill
            src={"/shape.svg"}
          />
        </div>
      </div>
      <div className="flex mx-4 mt-5 lg:mx-72 flex-col gap-10">
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl text-brand font-bold gap-3 font-varella text-center">
            Beralih <span className="text-black">dari Tradisional</span> ke
            Digital
          </h2>
        </div>
      </div>
      <div className="mt-10">
        {SECTION1.value.map((item, i) => (
          <div
            key={i}
            className="grid mx-4 lg:mx-72 grid-cols-1 md:grid-cols-7 items-center justify-center"
          >
            <div className="text-end pb-5 col-span-3 h-full w-full">
              {i % 2 !== 1 ? (
                <>
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="">{item.desc}</p>
                </>
              ) : null}
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <p className="border-2 border-brand rounded-lg font-bold px-3 py-2">
                #{i + 1}
              </p>
              {/* <div className="w-1 h-full bg-brand-dark"></div> */}
              {i !== SECTION1.value.length - 1 && (
                <div className="w-1 h-full bg-brand-dark"></div>
              )}
            </div>
            <div className="pb-5 col-span-3 w-full h-full">
              {i % 2 === 1 ? (
                <>
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="">{item.desc}</p>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
