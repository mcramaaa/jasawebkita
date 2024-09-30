import { SERVICESLIST } from '@/constants/appConstant'
import React from 'react'

export default function Services() {
  return (
    <div className='px-4 lg:px-32 mt-16'>
      <div className='items-center justify-center text-center '>
        <h1 className='text-2xl lg:text-5xl font-bold font-montserrat text-brand'>
            Our Service
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6  mx-10  justify-center mt-16'>
        {SERVICESLIST.map ((item, i) =>
            <div key={i} className='flex items-center text-center py-12 px-12 bg-brand text-brand-bone rounded-3xl hover:scale-110 hover:bg-brand-bone hover:text-brand duration-300'>
                <div className='flex items-center space-x-4 lg:space-x-6 justify-center'>
                    <span className='animate-bounce text-2xl lg:text-7xl'>{item.icon}</span>
                    <span className='text-lg font-bold'>{item.label}</span>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
