import { CLIENTLIST } from '@/constants/appConstant'
import Image from 'next/image'
import React from 'react'

export default function Client() {
  return (
    <div className='px-4 lg:px-32 bg-brand-bone mt-16 pb-8 rounded-[3.125rem]'>
      <div className='items-center flex text-center justify-center'>
        <h1 className='text-brand font-montserrat font-bold text-2xl lg:text-5xl mt-16'>
          Our Client
        </h1>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {CLIENTLIST.map((item, i) =>
        
          <div key={i} className='relative w-80 h-80 '>
            <div >
              <Image src={item.img} alt='' fill objectFit='contain'className='animate' />
            </div>
          </div>
        )}
      </div>
    </div>  
  )
}
