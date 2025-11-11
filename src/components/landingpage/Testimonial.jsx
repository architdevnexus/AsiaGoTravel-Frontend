import Image from 'next/image'
import React from 'react'
import { TestimonialCardStack } from './TestimonialCardStack'

export const Testimonial = () => {
  return (
    <div className='flex justify-center items-center pt-20 pb-10'>
        <div className='w-1/2  '>
<div className='bg-[#CCDEEB] h-2 rounded-tr-4xl my-10'>
</div>
<div className='pl-20'>
    <div className='h-1 my-4 bg-[#1B4965] w-10'>

    </div>
<span className='text-[#949494] text-normal font-medium py-10'>
    Our Reviews
</span>
<p className='text-3xl font-bold leading-12 pt-2'>
    What Our <br/> Clients say
</p>
</div>

<div className='bg-[#CCDEEB] h-2 rounded-tr-4xl my-10'>
</div>
        </div>
        <div className='absolute right-52'>
     <TestimonialCardStack   />
        </div>
   
        <div className='w-1/2'>
            <Image src='/img/Testimonialbg.svg' width={460} height={100} alt='bg' />
        </div>
    </div>
  )
}
