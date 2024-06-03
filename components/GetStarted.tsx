import Image from 'next/image'
import React from 'react'
import { AiFillApple } from 'react-icons/ai'
const GetStarted = () => {
  return (
    <div >

      <div className='container mx-auto flex justify-center items-center '>
        <div className="flex flex- rounded-lg lg:flex-row w-[80%] justify-between items-center bg-black  py-5 lg:py-10">
          <div className="flex flex-col gap-4 pl-4 lg:pl-20">
            <p className='text-5xl font-bold text-white'>Ready To Get Started?</p>
            <p className='text-white'>Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
              Vulputate.</p>
            <button className='bg-white text-black btn w-[200px] border-none flex gap-2 items-center capitalize hover:bg-[#FF5555] hover:text-white'>Download App
              <AiFillApple className='text-xl' />
            </button>
          </div>

          <Image className='max-md:hidden' src='/images/assets/mockImage4.svg' alt='hero' width={440} height={400} />

        </div>
      </div>
    </div>
  )
}

export default GetStarted