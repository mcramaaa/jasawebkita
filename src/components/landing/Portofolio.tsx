import { PORTOFLIO } from "@/constants/appConstant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Portofolio() {
  return (
    <div className="bg-gradient-to-b from-brand-bone to-white py-10">
      <div className="flex flex-col text-center items-center mx-4 justify-center gap-4">
        {/* <BsStars className="text-3xl text-brand" /> */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold font-montserrat text-brand">
          {PORTOFLIO.title}
        </h2>
        <p>{PORTOFLIO.desc}</p>
        {/* <BsStars className="text-3xl text-brand" /> */}
      </div>
      <Marquee
        speed={60}
        autoFill
        className="h-full py-10 relative overflow-hidden"
      >
        {PORTOFLIO.items.map((item, i) => (
          <Link href={item.url} target="_blank" key={i} className="">
            <div className=" drop-shadow-md hover:scale-105 duration-300 relative aspect-[1/2] bg-slate-500-300 w-80 lg:w-[360px] rounded-xl mr-8 overflow-hidden">
              <Image src={item.image} alt="" fill className="object-contain" />
            </div>
          </Link>
          //  </div>
        ))}
      </Marquee>
    </div>
  );
}
