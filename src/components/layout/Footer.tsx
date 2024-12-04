import { FOOTER } from "@/constants/appConstant";
import { useSection } from "@/zustand/useNav";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const { setSection } = useSection();

  return (
    <div className="px-10 mt-10">
      <div className="relative md:pb-10 bg-brand-core2Dark rounded-3xl overflow-hidden">
        <p className="absolute bottom-0 translate-y-1/3 w-full font-black text-white/60 font-montserrat text-4xl md:text-7xl lg:text-8xl text-center">
          JasaWebKita
        </p>
        <div className=" gap-6 px-4 lg:px-40 p-8 lg:pb-10 text-white grid md:grid-cols-2">
          <div className="order-first md:hidden flex flex-col w-full items-center text-center">
            <button
              onClick={() => setSection("home")}
              className="relative hover:scale-110 duration-300"
            >
              <p className="text-white font-black font-montserrat text-xl md:text-2xl lg:text-3xl">
                JasaWebKita
              </p>
            </button>
            <p className="font-bold">
              Buat website makin mudah hanya dengan 1,4 juta pertahun
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-5 items-center md:items-start">
            <button
              onClick={() => setSection("home")}
              className=" relative hover:scale-110 duration-300"
            >
              <button
                onClick={() => setSection("home")}
                className="relative hover:scale-110 duration-300"
              >
                <p className="text-white font-black font-montserrat text-xl md:text-2xl lg:text-3xl">
                  JasaWebKita
                </p>
              </button>
            </button>
            <p className="font-bold">
              Buat website makin mudah hanya dengan 1,4 juta pertahun
            </p>
          </div>
          <div className="flex-col flex items-center md:items-end gap-4">
            <p className="font-black">Hubungi Kami :</p>
            <div className="flex gap-2">
              {FOOTER.sosmed.map((data, i) => (
                <Link
                  target="_blank"
                  href={data.url}
                  className="text-lg hover:scale-110 hover:bg-brand duration-300 p-2 bg-white rounded-full text-brand-dark"
                  key={i}
                >
                  {data.icon}
                </Link>
              ))}
            </div>
            <div className="flex text-xs px-2 lg:text-sm gap-2">
              <FaLocationDot className="text-lg" />
              <p>{FOOTER.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs md:text-sm py-3">
        <p>
          © Copyright 2021{" "}
          <Link
            href={"https://whitelabel.bbiz.co.id/"}
            target="_blank"
            className="font-bold"
          >
            JasaWebKita
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
}
