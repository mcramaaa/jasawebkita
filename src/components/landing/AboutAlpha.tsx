import { ABOUTALPHAVALUE } from "@/constants/appConstant";
import Link from "next/link";
import React from "react";

export default function AboutAlpha() {
  return (
    <div className="px-4 lg:px-32 ">
      <div className="justify-center items-center text-center font-montserrat mt-24">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-brand">
          Tentang Kami
        </h2>
        <p className="text-2xl text-brand">
          Memperkenalkan apa itu alpha project
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center pt-16 pb-16 mx-4 lg:mx-20 xl:mx-72">
        <div className="flex items-center justify-center h-full w-full">
          {/* <ReactPlayer
            url={ABOUTALPHAVALUE.video}
            width="100%"
            height="100%"
            controls={true}
            playsinline={true}
            pip={false}
            stopOnUnmount={true}
            playing={true}
          /> */}
        </div>
        <div className="flex flex-col justify-center font-montserrat pl-3 gap-6">
          <h1 className="font-bold text-brand mt-10 md:mt-12 lg:mt-0 text-3xl lg:text-5xl">
            {ABOUTALPHAVALUE.title}
          </h1>
          <p className="pt-3">{ABOUTALPHAVALUE.desc}</p>
          <div className="flex mt-4 lg:mt-10 text-white items-center font-montserrat  lg:items-start justify-center text-center flex-col">
            <Link
              target="_blank"
              className="py-2 px-12 bg-brand rounded-lg animate-bounce lg:text-lg mt-4 font-bold "
              href={
                "https://api.whatsapp.com/send?phone=6285184864504&text=Hai%2C%20Alpha%20Project!%20Mau%20konsultasi%20untuk%20upgrading%20sosial%20media%20brand%20saya%2C%20nih!%20"
              }
            >
              Beli Sekarang!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
