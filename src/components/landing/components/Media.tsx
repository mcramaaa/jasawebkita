import { MEDIALIST } from "@/constants/appConstant";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

export default function Media() {
  const SWIPER_SIZE =
    "w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[600px]";

  return (
    <div className="py-10 mt-20 group">
      <div className="flex flex-col text-center items-center justify-centerfont-bold gap-4">
        <h1 className="font-bold font-montserrat text-3xl lg:text-5xl">
          Bikin Konten Mahal?
        </h1>
        <p className="text-2xl text-brand-blue">
          Alpha Project bisa bikin konten yang bikin dompetmu tetap tebal
        </p>
      </div>
      {/* IMAGE SLIDING */}
      <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 ">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={2000}
          grabCursor={true}
          modules={[Autoplay, Pagination, Pagination]}
          className={SWIPER_SIZE}
        >
          {MEDIALIST.map((item) => (
            <SwiperSlide
              key={item.id}
              className="relative w-full h-full aspect-square "
            >
              <Image
                src={item.img}
                alt={""}
                fill
                sizes="(max-width: 640px) 100vh, (max-width: 768px) 80vh, 70vh"
                priority
                className="object-contain hover:scale-105 duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
