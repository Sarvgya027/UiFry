// import Image from 'next/image'
// import React from 'react'
// import { MdEmail } from "react-icons/md";
// import { FaSquarePhone } from "react-icons/fa6";


// const Footer = () => {
//   return (
//     <div className='bg-[#fdfdfd] w-full px-28'>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10">
//         <div className="flex flex-col gap-4 items-start">
//           <Image className='ml-4' src="/images/logo1.png" alt="logo" width={100} height={100} />
//           <div className="flex gap-2 items-start">
            
//             <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'><MdEmail /> help@Frybix.com</button>
//           </div>
//           <div className="flex gap-2  ml-4 items-start">
//             <p className='text-sm flex items-center justify-center text-black font-medium'><FaSquarePhone /> +1234 678 89</p>
//           </div>
//         </div>
//         <div className="flex flex-col items-start">
//           <p className='text-3xl ml-4 font-medium'>Links</p>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Home</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>About</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Booking</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Blog</button>

//         </div>
//         <div className="flex flex-col items-start">
//           <p className='text-3xl ml-4 font-medium'>Legal</p>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Terms of Use</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Privacy Policy</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Cookie Policy</button>

//         </div>
//         <div className="flex flex-col items-start">
//           <p className='text-3xl ml-4 font-medium'>Product</p>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Take a Tour</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Live Chat</button>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Reviews</button>

//         </div>
//         <div className="flex flex-col items-start">
//           <p className='text-3xl ml-4 font-medium'>NewsLetter</p>
//           <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Stay Up To Date</button>
//           <div className="flex items-start flex-col gap-2">
//             <input type="text" className='px-3 py-3 bg-white' placeholder='Your email' />
//             <button className='bg-black w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-[#FF5555]'>Subscribe</button>
//           </div>
//         </div>
//       </div>
//       <hr className="border-gray-300 my-6" /> 
//       <p className="text-center tracking-widest text-gray-500 pb-4">© 2022 Uifry.com All rights reserved.</p> 
//     </div>
//   )
// }

// export default Footer


import Image from 'next/image';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#fdfdfd] w-full px-10 py-8 lg:px-28'>
      <hr className="border-gray-300 my-6" /> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto">
        <div className="flex flex-col gap-4 items-start">
          <Image className='ml-4' src="/images/logo1.png" alt="logo" width={100} height={100} />
          <div className="flex gap-2 items-start">
            <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'><MdEmail /> help@Frybix.com</button>
          </div>
          <div className="flex gap-2 ml-4 items-start">
            <p className='text-sm flex items-center justify-center text-black font-medium'><FaSquarePhone /> +1234 678 89</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className='text-3xl ml-4 font-medium'>Links</p>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Home</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>About</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Booking</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Blog</button>
        </div>
        <div className="flex flex-col items-start">
          <p className='text-3xl ml-4 font-medium'>Legal</p>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Terms of Use</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Privacy Policy</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Cookie Policy</button>
        </div>
        <div className="flex flex-col items-start">
          <p className='text-3xl ml-4 font-medium'>Product</p>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Take a Tour</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Live Chat</button>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Reviews</button>
        </div>
        <div className="flex flex-col max-sm:items-center items-start">
          <p className='text-3xl ml-4 font-medium'>NewsLetter</p>
          <button className='text-md btn btn-link text-black hover:text-[#FF5555] font-medium'>Stay Up To Date</button>
          <div className="flex items-start flex-col gap-2">
            <input type="text" className='px-3 py-3 bg-white' placeholder='Your email' />
            <button className='bg-black w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-[#FF5555]'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-6" /> 
      <p className="text-center tracking-widest text-gray-500 pb-4">© 2022 Uifry.com All rights reserved.</p> 
    </div>
  );
};

export default Footer;
