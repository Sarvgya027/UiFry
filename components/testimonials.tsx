import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container w-[90%] mt-20 mx-auto">
      <p className="text-xl font-medium text-center py-2 tracking-widest">TESTIMONIAL</p>
      <p className="text-center text-black font-extrabold text-5xl">
        What Our Users <br /> Say About Us?
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src="/images/assets/mockImage3new.svg" alt="hero" width={700} height={900} />
        <div className="flex flex-col gap-5  items-start">
          <p className="text-3xl text-black font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, <br />
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor <br />
            Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
          <Image src='/images/assets/Users.svg' alt='users' width={150} height={150} />
          <p className="text font-semibold">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;