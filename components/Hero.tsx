import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import { BsPlayCircle } from "react-icons/bs";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='container w-[90%] mx-auto'>
      <div className='flex lg:flex-row flex-col justify-between items-center'>
        <div className='flex flex-col gap-5'>
          <p className='text-6xl text-black font-extrabold'>Make The Best Financial Decisions</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque praesentium ipsa soluta modi officiis sint.</p>
          <div className="flex items-center gap-4">
            <button className='btn bg-black text-white text-lg flex items-center gap-3 hover:bg-[#FF5555] rounded-sm'>
              Get Started <CgArrowLongRight className='h-6 w-6' />
            </button>
            <div className="flex gap-3 hover:text-[#FF5555] cursor-pointer">
            <BsPlayCircle className='h-6 w-6' />
            <p className='text-lg'>Watch Video</p>
            </div>
          </div>
          <Image className='h-[350px]' src='images/assets/belowHero1.svg' alt='hero' width={550} height={550} priority={true} />
        </div>
        <Image src='/images/assets/hero1.svg' alt='hero' width={700} height={900} priority={true} />

      </div>

    </div>
  )
}



