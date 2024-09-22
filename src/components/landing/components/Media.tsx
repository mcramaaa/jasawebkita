import { MEDIALIST } from '@/constants/appConstant'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


export default function Media() {
  return (

    <div className='  py-10 '>
        <div className='flex flex-col text-center items-center justify-centerfont-bold'>
            <h1 className='font-bold text-3xl lg:text-5xl'>
                Lorem, ipsum dolor.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ratione!
            </p>
        </div>
            {/* IMAGE SLIDING */}
            <div className='px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-20'>
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{delay:3000, disableOnInteraction:false}}
                speed={2000}
                grabCursor={true}
                pagination={{type:'custom'}}
                modules={[Autoplay, Pagination, Pagination]}
                className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px]'
              >
                {MEDIALIST.map((item) => (
                  <SwiperSlide key={item.id} className='relative w-full h-full aspect-square '>
                    <Image 
                      src={item.img} 
                      alt={''} 
                      fill 
                      sizes="(max-width: 640px) 100vh, (max-width: 768px) 80vh, 70vh"
                      style={{objectFit: 'contain'}}
                      priority
                      className='hover:scale-105 duration-300'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
    </div>
  )
}