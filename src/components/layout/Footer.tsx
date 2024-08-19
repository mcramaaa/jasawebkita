import { FOOTER } from "@/constants/appConstant";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="">
      <div className="bg-gradient-to-b border-t-2 p-4 mt-20">
        <div className="flex w-full flex-col items-center">
          <div className="text-center">
            <p className="text-brand-dark hover:scale-110 duration-300 font-montserrat cursor-default hover:drop-shadow-lg flex font-bold flex-col justify-center text-wrap text-center items-center">
              Buat Toko Online Anda Sendiri dengan Mudah dan Cepat
            </p>
            {/* <p className="">
              Dukung dan Tingkatkan Bisnis Anda dengan{" "}
              <span className="font-bold text-brand-dark uppercase">
                Bbiz Commerce
              </span>
            </p> */}
            <p className="">
              Kami membantu Anda membangun toko online yang menarik, responsif,
              dan mudah digunakan
            </p>
          </div>
          <div className="flex gap-2 mt-10">
            {FOOTER.sosmed.map((data, i) => (
              <Link
                href={data.url}
                className="text-xl hover:scale-110 hover:bg-brand duration-300 p-2 bg-brand-dark rounded-full text-white"
                key={i}
              >
                {data.icon}
              </Link>
            ))}
          </div>
          <div className="flex text-xs lg:text-sm gap-2 mt-5">
            <FaLocationDot className="text-lg" />
            <p>{FOOTER.address}</p>
          </div>

          {/* <div className="aspect-[4/1] relative w-20">
          <Image src={"/blogo.png"} alt="" fill />
        </div> */}
        </div>
      </div>
      <div className="text-center bg-brand-dark text-white text-sm py-3 border-t">
        <p>
          © Copyright 2023{" "}
          <Link href={"https://whitelabel.bbiz.co.id/"} className="font-bold">
            BBIZ Engine
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
}
