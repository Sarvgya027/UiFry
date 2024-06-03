import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { PiStarFourLight } from "react-icons/pi";
const FullyCustomize = () => {
  return (
    <div className="container w-[90%] mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src='/images/assets/mockImage3.png' alt='chooseUs' width={500} height={500} priority={true} />
        <div className="flex flex-col gap-10 items-start">

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <PiStarFourLight className="h-10 w-10 text-[#FF5555]" />
              <p className="text-2xl mt-10 font-semibold">Fully Customizable</p>
            </div>

            <p className="text-lg text-gray-500">Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
          </div>


        </div>

      </div>
    </div>
  );
};

export default FullyCustomize;