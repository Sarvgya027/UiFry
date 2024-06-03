import Image from "next/image";
import React from "react";
import { RxColorWheel } from "react-icons/rx";
import { PiStarFourLight } from "react-icons/pi";
import { GrThreeDEffects } from "react-icons/gr";


const Features = () => {
  return (
    <div className="container w-[90%] mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src='/images/assets/mockimage1.svg' alt='hero' width={600} height={800} priority={true} />
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col mb-5 ">
            <p className="text-[#FF5555] tracking-widest font-medium text-lg items-start">FEATURES</p>
            <p className="text-5xl text-black font-extrabold items-start">Uifry Premium</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <PiStarFourLight className="h-6 w-6 text-[#FF5555]" />
              <p className="text-xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-lg text-gray-500">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
            <RxColorWheel className="h-6 w-6 text-[#FF5555]" />
              <p className="text-xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-lg text-gray-500">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
            <GrThreeDEffects className="h-6 w-6 text-[#FF5555]" />
              <p className="text-xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-lg text-gray-500">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Features;

