import { SECTION1 } from "@/constants/appConstant";
import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="group bg-brand-bone overflow-hidden relative mt-32 pb-16 rounded-[3.125rem] ">
      <Image
        src={"/bg.png"}
        className="object-cover group-hover:scale-125 duration-1000"
        alt=""
        fill
      />
      {/* <div className="z-20 -top-1 absolute rotate-180 w-full">
        <div className="relative w-full aspect-[9/1]">
          <Image
            alt=""
            className="bottom-0 absolute object-cover"
            fill
            src={"/shape.svg"}
          />
        </div>
      </div> */}
      <div>
        <div className="flex mx-4 mt-16 lg:mx-20 md:mt-24 lg:mt-20 flex-col gap-10">
          <div className="w-full flex flex-col items-center  justify-center">
            <p className="text-2xl md:text-3xl py-3 font-montserrat font-bold text-brand">Lalu apa solusinya ?</p>
            <h2 className="text-3xl group-hover:scale-110 font-montserrat duration-1000 w-fit md:text-4xl text-brand group-hover:text-brand-dark font-bold gap-3 font-varella text-center">
              Beralih{" "}
              <span className="font-light text-brand-dark">
                dari Tradisional
              </span>{" "}
              ke Digital
            </h2>
          </div>
        </div>
        <div className="mt-10 z-30">

          {SECTION1.value.map((item, i) => (
            <div
              key={i}
              className="grid mx-4 px-4 lg:px-32 lg:mx-20 grid-cols-1 md:grid-cols-14  items-center text-brand-dark justify-center"
            >
              {/* LEFT*/}
              <div
                className={`${
                  i % 2 !== 1 ? "order-1 md:order-1" : "order-1 md:order-3"
                } col-span-6 h-full w-full flex items-center justify-end`}
              >
                {i % 2 === 1 ? (
                  <div className="w-80 h-96 relative object-contain flex justify-center">
                    <Image src={item.image} alt="" fill className="z-20" />
                    <div className="bg-white h-1/2 w-full absolute bottom-0 rounded-3xl z-0"></div>
                  </div>
                )  : (
                  <div className="flex gap-2 md:items-end flex-col">
                    <h4 className="px-3 font-montserrat rounded-lg lg:rounded-full py-1 lg:bg-gradient-to-l bg-gradient-to-r from-brand-dark to-brand lg:w-fit text-white font-bold lg:text-2xl">
                      {item.label}
                    </h4>
                    <p className="text-sm md:text-base">{item.desc}</p>
                  </div>
                )}
              </div>

              {/* MID */}
              <div className="col-span-1 w-full h-full hidden md:flex flex-col items-center justify-center ">
                <div
                  className={`grid place-items-center ${
                    i !== SECTION1.value.length - 1 ? "h-[50px]" : "h-[40px]"
                  }  rounded-full w-[40px] bg-brand`}
                >
                  <p className="font-montserrat text-white font-bold text-center">
                    {i + 1}
                  </p>
                </div>
                {i !== SECTION1.value.length - 1 && (
                  <div className="w-[3px] h-full bg-brand"></div>
                )}
              </div>

              {/* RIGHT */}
              <div
                className={`${
                  i % 2 === 1 ? "order-1 md:order-1" : "order-1 md:order-3"
                } col-span-6  h-full w-full flex justify-start marker:items-center`}
              >
                {i % 2 !== 1 ? (
                  <div className="w-80 h-96 object-contain relative ">
                      <Image src={item.image} alt="" fill className="z-20"/>
                      <div className="bg-white h-1/2 w-full absolute bottom-0 rounded-3xl z-0"></div>
                  </div>
                ) : (
                  <div className="flex gap-2 flex-col md:items-start   ">
                
                    <h4 className="px-3 font-montserrat rounded-lg lg:rounded-full py-1 bg-brand bg-gradient-to-r from-brand-dark to-brand w-full md:w-fit text-white font-bold lg:text-2xl ">
                      {item.label}
                    </h4>

                    <p className="text-sm md:text-base">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="z-20 top-0 w-full">
        <div className="relative w-full aspect-[9/1]">
          <Image
            alt=""
            className="bottom-0 absolute object-cover"
            fill
            src={"/shape.svg"}
          />
        </div>
      </div> */}
    </div>
  );
}
