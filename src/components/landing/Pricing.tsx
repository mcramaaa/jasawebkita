import { PACKAGE } from "@/constants/appConstant";
import { convertRupiah } from "@/helper/common";
import React from "react";
import { LuCheckCircle } from "react-icons/lu";

export default function Pricing() {
  return (
    <div className=" mt-32 px-4 lg:px-32 group w-full">
      <div className="flex mt-32 flex-col gap-10">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="md:text-2xl text-xl gap-3 text-center">
            Apa yang{" "}
            <span className="font-bold text-brand-dark">kamu dapatkan ?</span>
          </h2>
          <div className="h-[2px] mt-2 group-hover:w-full w-0 duration-500 rounded-xl bg-brand"></div>
        </div>
      </div>
      {/* TAB */}
      <div className="flex mt-10 lg:grid-cols-3 flex-wrap justify-center group gap-7 mx-10">
        {PACKAGE.map((data, i) => (
          <div key={i} className="flex ">
            <div
              key={i}
              className={`${
                i % 2 !== 0
                  ? "bg-brand-bone border hover:scale-105"
                  : "border hover:scale-105"
              } p-5 flex flex-col gap-3 font-varella group rounded-lg duration-300 bg-white drop-shadow-md hover:drop-shadow-lg hover:bg-brand-bone`}
            >
              <div>
                <h3 className="font-montserrat font-bold text-xl">
                  {data.title}
                </h3>
              </div>
              <p className="">
                {/* Rp. */}
                <span className="font-bold font-montserrat text-2xl">
                  {convertRupiah(data.price)}
                </span>
                {data.duration}
              </p>
              <button
                className={`${
                  i % 2 === 0 ? "border border-brand text-brand-dark" : ""
                } text-xl text-white w-full rounded-lg bg-brand-dark hover:scale-105 duration-300 font-bold py-1`}
              >
                Pilih Paket
              </button>
              <p className="text-sm mt-4">{data.desc}</p>
              <div className="h-[2px] rounded-xl group-hover:bg-white bg-slate-200 duration-300"></div>
              <div className="flex flex-col gap-2">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <LuCheckCircle className="text-sm text-green-700" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
