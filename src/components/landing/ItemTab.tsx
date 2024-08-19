import { PACKAGE } from "@/constants/appConstant";
import { convertRupiah } from "@/helper/common";
import React from "react";
import { LuCheckCircle } from "react-icons/lu";

export default function ItemTab() {
  return (
    <div className=" mt-32 mx-4 lg:mx-72 group">
      <div className="flex mt-32 flex-col gap-10">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="md:text-2xl text-xl gap-3 font-varella text-center">
            Pilih paket terbaik untuk{" "}
            <span className="font-bold text-brand-dark">Bisnismu</span>
          </h2>
          <div className="h-[2px] mt-2 group-hover:w-full w-0 duration-500 rounded-xl bg-brand"></div>
        </div>
      </div>
      {/* TAB */}
      <div className="grid mt-10 lg:grid-cols-3 justify-center group gap-7 mx-10">
        {PACKAGE.map((data, i) => (
          <div key={i} className="flex ">
            <div
              key={i}
              className={`${
                i % 2 !== 0
                  ? "border-brand-dark border-2 scale-105 hover:scale-110"
                  : "border hover:scale-105"
              } p-5 flex flex-col gap-3 font-varella  rounded-lg duration-300 bg-white hover:drop-shadow-lg`}
            >
              <div>
                <h3 className="font-bold text-xl">{data.title}</h3>
                <p className="text-xs">{data.desc}</p>
              </div>
              <p className="">
                {/* Rp. */}
                <span className="font-bold text-2xl">
                  {convertRupiah(data.price)}
                </span>
                /{data.duration}
              </p>
              <button
                className={`${
                  i % 2 === 0
                    ? "bg-white border border-brand-dark text-brand-dark"
                    : "text-white"
                } text-xl w-full rounded-lg bg-brand-dark font-bold py-1`}
              >
                Pilih Paket
              </button>
              <div className="h-[2px] mt-2 rounded-xl bg-slate-200"></div>
              <div className="flex flex-col gap-2">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <LuCheckCircle className="text-sm text-brand-dark" />
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
