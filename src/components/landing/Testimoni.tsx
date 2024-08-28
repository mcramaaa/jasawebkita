import { TESTI } from "@/constants/appConstant";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Testimoni() {
  return (
    <div className="mt-16 bg-gradient-to-b from-brand-bone to-white py-14">
      <div className="px-4 lg:px-72 ">
        <h2 className="text-center flex text-3xl font-bold text-brand-dark font-montserrat flex-col">
          Dari Mereka yang Sudah Merasakannya
        </h2>
        <p className="text-center mt-4 text-sm lg:text-base lg:mx-40">
          Biarkan para klien kami yang berbicara. Hasil yang memuaskan bukan
          sekadar janji, tapi kenyataan yang dirasakan oleh klien kami. Baca
          kisah mereka dan lihat bagaimana layanan kami membuat perbedaan besar.
        </p>
      </div>

      <div className="mt-10">
        <Marquee direction="right" pauseOnHover autoFill className="">
          {/* {Array.from({ length: 5 }, (_, idx) => ( */}
          {/* <div className="flex gap-4 h-40"> */}
          {TESTI.map((item, i) => (
            <div
              className="w-60 h-96 p-4 rounded-xl mr-4 flex flex-col items-center justify-center bg-pink-200"
              key={i}
            >
              <h5>{item.label}</h5>
              <div className="bg-white">
                {/* <VideoPlayer src={item.video} /> */}
              </div>
            </div>
          ))}
          {/* </div> */}
          {/* ))} */}
        </Marquee>
      </div>
    </div>
  );
}
