// import { useSection } from "@/zustand/useNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface ISupport {
//   label: string;
//   logo: string;
// }

export default function Hero() {
  // const { setSection } = useSection();

  return (
    <>
      <div className="relative pt-16">
        <div className="lg:h-[90vh] h-[90vh] h relative overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center justify-center">
            <div className="flex justify-center hover:scale-110 duration-300 hover:animate-pulse">
              <div className="relative w-[39vh] md:w-[50vh] lg:w-[70vh] aspect-square z-10">
                <Image alt="" fill src={"/assets/hero.png"} />
              </div>
            </div>
            <div className="lg:order-first px-4">
              <h1 className="text-white text-5xl gap-3 lg:px-20 lg:text-6xl hover:scale-110 duration-300 font-montserrat cursor-default hover:drop-shadow-lg flex font-bold flex-col justify-center text-wrap text-center items-center">
                Stop Pusing <span>Mikir Konten</span>
              </h1>

              <h2 className="text-lg lg:text-3xl mt-9 text-center text-white">
                Mulai Naikin Omzet Tanpa Beban !!
              </h2>
              
              <div className="flex mt-4 lg:mt-10 text-white lg:gap-10  items-center justify-end text-center mx-4 flex-col">
                <Link
                  target="_blank"
                  className="py-1 px-3 bg-white text-brand-dark rounded-xl animate-bounce lg:text-2xl mt-4 hover:bg-brand-dark hover:scale-105 hover:text-white duration-300 font-bold"
                  href={
                    "https://api.whatsapp.com/send?phone=6285184864504&text=Hai%2C%20Alpha%20Project!%20Mau%20konsultasi%20untuk%20upgrading%20sosial%20media%20brand%20saya%2C%20nih!%20"
                  }
                >
                  Konsultasi Sekarang
                </Link>
                {/* <button
                  className="py-1 px-3 bg-white text-brand-dark rounded-xl animate-bounce lg:text-2xl mt-4 hover:bg-brand-dark hover:scale-105 hover:text-white duration-300 font-bold"
                  onClick={() => setSection("pricing")}
                >
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 bottom-0 absolute w-full">
          <div className="relative w-full aspect-[9/1]">
            <Image
              alt=""
              className="bottom-0 absolute object-cover"
              fill
              src={"/shape.svg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
