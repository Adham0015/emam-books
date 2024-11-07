import React from "react";
import MaskSvg from "./MaskSvg";
import Image from "next/image";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";
import Svg4 from "./Svg4";
import Svg5 from "./Svg5";
import Svg6 from "./Svg6";
import Svg7 from "./Svg7";

function HeroSection() {
  return (
    <div className="bg-[#1D5BFC] max-w-screen-3xl">
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col w-full max-w-xs mx-auto px-4">
        <div className="flex flex-col items-center gap-3 pt-5 text-center">
          <h3 className="font-DynaPuff font-semibold tracking-wide text-[#FBC820]">
            We Handle It All!
          </h3>
          <h3 className="font-DynaPuff font-semibold tracking-wide text-white text-xl">
            Inspiring Young <br />
            Minds with Easy <br /> Book Fairs.
          </h3>
          <button className="bg-[#FBC820] w-24 h-8 rounded-3xl text-center text-sm font-bold text-[#1D5BFC]">
            Contact us
          </button>
        </div>
        <div className="">
          <Image
            src="/image2.png"
            alt="Book Fair"
            width={300}
            height={50}
            className="w-full"
          />
        </div>
      </div>

      {/* Larger screen layout */}
      <div className="hidden md:flex items-center justify-between gap-8 px-8">
        <div className="flex flex-col gap-5 pb-20 ml-24">
          <h3 className="font-DynaPuff font-semibold tracking-wide text-[#FBC820] text-lg">
            We Handle It All!
          </h3>
          <h1 className="font-DynaPuff font-semibold tracking-wide text-white text-3xl leading-tight">
            Inspiring Young <br />
            Minds with Easy <br /> Book Fairs.
          </h1>
          <button className="bg-[#FBC820] w-40 h-12 rounded-3xl text-center text-lg font-bold text-[#1D5BFC]">
            Contact us
          </button>
        </div>
        <div className="pt-16 pr-10">
          <Image
            src="/image2.png"
            alt="Book Fair"
            width={600}
            height={500}
            className="w-full max-w-[500px] lg:-mb-5 xl:-mb-12"
          />
          <div className="absolute bottom-64 -right-2">
            <Svg2 />
          </div>
          <div className="absolute top-80 right-28 ">
            <Svg3 />
          </div>
          <div className="absolute top-24 right-20">
            <Svg1 />
          </div>
          <div className="absolute top-24 right-64">
            <Svg4 />
          </div>
          <div className="absolute top-32 right-96 ">
            <Svg3 />
          </div>
          <div className="absolute top-48 right-96">
            <Svg5 />
          </div>
          <div className="absolute top-72 left-50 ">
            <Svg3 />
          </div>
          <div className="absolute top-96 left-54 ">
            <Svg6 />
          </div>
          <div className="absolute bottom-48 left-54  ">
            <Svg7 />
          </div>
        </div>
      </div>
      <div className=" z-50 -mt-20 ">
        <MaskSvg />
      </div>
    </div>
  );
}

export default HeroSection;
