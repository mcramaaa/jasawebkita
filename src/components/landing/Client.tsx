import { CLIENTLIST } from '@/constants/appConstant'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Client() {
  return (
    <div className='px-4 lg:px-20 bg-brand-bone mt-16 pb-8 rounded-[3.125rem]'>
      <div className='items-center flex text-center justify-center'>
        <h1 className='text-brand font-montserrat font-bold text-2xl lg:text-5xl mt-16'>
          Our Client
        </h1>
      </div>
      <div className='flex  items-center justify-center '>
        <Marquee
          speed={60}
          autoFill
          className="h-full py-10 relative overflow-hidden "
        >
          
        {CLIENTLIST.map((item, i) =>
        
          <div key={i} className='relative w-64 h-64 '>
            <div >
                <Image src={item.img} alt='' fill objectFit='contain' />
            </div>
          </div>
        )}
        </Marquee>
      </div>
    </div>  
  )
}
