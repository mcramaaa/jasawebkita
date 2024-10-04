import { TESTI } from "@/constants/appConstant";
import React, { useState } from "react";
import { FaPlay, FaRegComments } from "react-icons/fa6";
import ReactPlayer from "react-player";
import {  Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

export default function Testimoni() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="px-4 bg-brand-bone lg:px-20 xl:px-32 py-14 grid lg:grid-cols-3">
      <div className="flex flex-col justify-center">
        <div className="text-7xl w-full justify-center items-center py-7 flex lg:justify-start text-brand">
          <FaRegComments />
        </div>
        <h2 className="flex text-3xl font-bold text-brand-dark font-montserrat flex-col">
          Dari Mereka yang Sudah Merasakannya
        </h2>
        <p className="mt-4 text-sm lg:text-base">
          Biarkan para klien kami yang berbicara. Hasil yang memuaskan bukan
          sekadar janji, tapi kenyataan yang dirasakan oleh klien kami. Baca
          kisah mereka dan lihat bagaimana layanan kami membuat perbedaan besar.
        </p>
      </div>

      <div className="lg:col-span-2 relative ">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          centeredSlides={true}
          speed={2000}
          grabCursor={true}
          modules={[Pagination, EffectCoverflow]}
          onSlideChange={handleSlideChange}
          effect="coverflow"
          coverflowEffect={{rotate:30, stretch:3, depth:50, modifier:1, slideShadows:false}}
          className="w-full h-[70vh]"
        >
          {TESTI.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-4 h-full flex flex-col">
                <div className="h-[50vh] bg-brand-bone flex items-center justify-center relative overflow-hidden">
                  {activeSlide === i ? (
                    isPlaying ? (
                      <ReactPlayer
                        url={item.video}
                        width="100%"
                        height="100%"
                        controls={true}
                        playing={true}
                        onEnded={() => setIsPlaying(false)}
                      />
                    ) : (
                      <button onClick={handleVideoClick}>
                        <FaPlay className="text-xl text-white" />
                      </button>
                    )
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span>SlideTest {i + 1}</span>
                    </div>
                  )}
                </div>
                <p className="justify-center mt-4 flex">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}