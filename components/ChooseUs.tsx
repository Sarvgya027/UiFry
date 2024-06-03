import Image from "next/image";
import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";

const ChooseUs = () => {
  return (
    <div className="container mt-10 w-[90%] mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-5 items-start lg:w-1/2">
          <p className="text-[#FF5555] tracking-widest font-medium text-lg items-start">ADVANTAGES</p>
          <p className="text-5xl text-black font-extrabold items-start">Why Choose Uifry?</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <IoNotificationsCircle className="h-10 w-10 text-[#FF5555]" />
              <p className="text-2xl font-semibold">
                Clever Notifications
              </p>
            </div>
            <p className="text-lg text-gray-500">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>

        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/assets/mockimage2.svg"
            alt="hero"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
