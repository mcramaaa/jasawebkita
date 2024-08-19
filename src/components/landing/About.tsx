import React from "react";
import shopLottie from "@/assets/lottie/shop-lottie.json";
import Lottie from "lottie-react";
import { ABOUTVALUE } from "@/constants/appConstant";
import { LuCheckCircle } from "react-icons/lu";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-3 lg:gap-10 justify-center items-center pt-32 mx-4 lg:mx-72">
      <div className="flex items-center p-3 justify-center bg-gradient-to-t from-white  via-brand/10  to-white rounded-3xl">
        <div className="w-full rounded-xl m-4">
          <Lottie animationData={shopLottie} autoPlay loop className="h-60" />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3>
          Kami menawarkan layanan pembuatan website e-commerce yang lengkap,
          mulai dari desain, pengembangan, hingga integrasi pembayaran dan
          pengiriman. Semua yang Anda butuhkan untuk menjalankan toko online
          yang sukses ada di sini.
        </h3>
        {/* <h2 className="md:text-2xl text-xl font-semibold flex font-varella flex-col">
          Dukung dan Tingkatkan Bisnis
          <span>
            dengan{" "}
            <span className="font-black text-brand-dark">
              <span className="text-brand">BBIZ</span> COMMERCE
            </span>
          </span>
        </h2>
        <p>
          Mulai, Kelola, dan Kembangkan Toko Online dengan 1 aplikasi yang
          fleksibel dan handal.
        </p> */}
        <ul className="">
          {ABOUTVALUE.map((value, i) => (
            <li key={i} className="flex items-center gap-2">
              <LuCheckCircle className="text-sm text-brand" />
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
