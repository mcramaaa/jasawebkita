import { FOOTER } from "@/constants/appConstant";
import { useSection } from "@/zustand/useNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TfiHandPointRight } from "react-icons/tfi";

export default function Footer() {
  const { setSection } = useSection();

  return (
    <div className="relative bg-gradient-to-l from-brand-dark to-brand">
      {/* <div className="relative w-full -top-[2px] aspect-[9/1] rotate-180">
        <Image
          alt=""
          className="bottom-0 absolute object-cover"
          fill
          src={"/shape.svg"}
        />
      </div> */}
      <div className=" gap-6 px-4 lg:px-40 py-10 text-white grid md:grid-cols-2">
        <div>
          <h2 className="flex flex-col font-montserrat font-bold text-3xl">
            <span>Mau Bangun Bisnis</span>
            <span>Bingung Mulai dari Mana?</span>
            <span>Ke Alpha Project aja !</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <TfiHandPointRight className="text-8xl" />
          <div>
            <p className="text-sm lg:text-base text-justify">
              Kalo kamu <span className="font-bold">UMKM</span> atau pengusaha pemula yang mau dibantu dalam
              optimasi usaha, kamu bisa hubungi kami untuk bantu jemput
              kesuksesan pertama mu
            </p>
            <p className="font-bold text-yellow-400">Hubungi kami !</p>
          </div>
        </div>
        <div className="order-first md:hidden">
          <button
            onClick={() => setSection("home")}
            className="aspect-square w-20 relative hover:scale-110 duration-300"
          >
            <Image
              src={"/assets/icon.png"}
              alt=""
              fill
              className="object-contain"
            />
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setSection("home")}
            className="aspect-square w-20 relative hover:scale-110 duration-300"
          >
            <Image
              src={"/assets/icon.png"}
              alt=""
              fill
              className="object-contain"
            />
          </button>
        </div>
        <div className="flex-col">
          <div className="flex gap-2 mt-10">
            {FOOTER.sosmed.map((data, i) => (
              <Link
                target="_blank"
                href={data.url}
                className="text-xl hover:scale-110 hover:bg-brand duration-300 p-2 bg-brand-dark rounded-full text-white"
                key={i}
              >
                {data.icon}
              </Link>
            ))}
          </div>
          <div className="flex text-xs px-2 lg:text-sm gap-2 mt-5">
            <FaLocationDot className="text-lg" />
            <p>{FOOTER.address}</p>
          </div>
        </div>
      </div>
      <div className="text-center  text-white text-sm py-3 border-t border-brand">
        <p>
          © Copyright 2024 Alpha Project Crafted by{" "}
          <Link
            href={"https://whitelabel.bbiz.co.id/"}
            target="_blank"
            className="font-bold"
          >
            BBIZ Engine
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
}
