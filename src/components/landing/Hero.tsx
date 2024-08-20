import Image from "next/image";
import React from "react";

// interface ISupport {
//   label: string;
//   logo: string;
// }

export default function Hero() {
  // const { setSection } = useSection();

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="min-w-[300vw] h-[90vh] overflow-hidden ">
          {/* <div className="absolute flex flex-col justify-end items-center pb-10 bottom-0 bg-gradient-to-t from-white via-white/80 to-white/0 h-3/4 w-full z-10"> */}
          {/* <h1 className="text-brand-dark text-3xl hover:scale-110 duration-300 font-montserrat cursor-default hover:drop-shadow-lg flex font-bold flex-col justify-center text-wrap text-center items-center">
              Buat Toko Online Anda Sendiri <span>dengan Mudah dan Cepat</span>
            </h1>

            <div className="flex mt-4 text-xl items-center justify-end text-center mx-4 flex-col">
              <h2>
                Tingkatkan penjualan Anda dengan website e-commerce yang
                dioptimalkan untuk performa dan konversi
              </h2>

              <button
                className="py-1 px-3 bg-brand rounded-xl mt-4 hover:bg-brand-dark hover:scale-105 hover:text-white duration-300 font-bold"
                onClick={() => setSection("pricing")}
              >
                Bangun Toko Online Anda Hari Ini
              </button>
            </div> */}
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
