"use client";
import Image from "next/image";
import React from "react";
import Svg6 from "./Svg6";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const images = ["/pic1.png", "/pic2.png", "/pic3.png", "/pic4.png"];
function OurBook2() {
  return (
    <div className=" py-2 px-10 max-h-[731px] bg-[#1D5BFC]">
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center gap-2 w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-DynaPuff font-semibold text-4xl text-white">
            Our books
          </h1>
          <p className="font-normal text-lg text-white">
            Lorem ipsum dolor sit amet consectetur. Vel orci lobortis nunc
            lobortis adipiscing. Proin tellus suspendisse vitae diam accumsan.
          </p>
          <button className="bg-[#FBC820] w-40 h-12 rounded-3xl text-center text-lg font-bold text-[#1D5BFC] hover:bg-[#f0b819]">
            Contact us
          </button>
        </div>
        {/* images */}
        <div className="w-[300px] h-[200px]">
          <Swiper
            modules={[Pagination]}
            // pagination={{ clickable: true }}
            spaceBetween={6}
            slidesPerView={2.5}
            className="h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Larger screen layout */}
      <div className="hidden relative md:flex md:gap-4 my-16 md:ml-2 xl:ml-12 mx-4 max-h-[731px]">
        <div className="relative w-1/2 ">
          <Image
            src="/pic1.png"
            alt="Image 1"
            width={150}
            height={288}
            className="absolute -left-8 z-30"
          />
          <Image
            src="/pic2.png"
            alt="Image 2"
            width={150}
            height={288}
            className="absolute left-32 z-20"
          />
          <Image
            src="/pic3.png"
            alt="Image 3"
            width={150}
            height={288}
            className="absolute top-32 left-52"
          />
          <Image
            src="/pic4.png"
            alt="Image 4"
            width={150}
            height={288}
            className="absolute top-32 left-12"
          />
        </div>

        <div className="flex flex-col w-1/2 gap-3 md:justify-between">
          <Svg6 />
          <h1 className="font-DynaPuff font-semibold text-4xl lg:text-5xl text-white">
            Our books
          </h1>
          <p className="font-normal text-lg text-white">
            Lorem ipsum dolor sit amet consectetur. Laoreet varius est rutrum
            ipsum malesuada purus dis eget ipsum. Interdum volutpat dictum dui
            id. Ipsum sed et nisl posuere diam ullamcorper augue fermentum
            rhoncus. Nibh proin pretium libero accumsan.
          </p>
          <p className="font-normal text-lg text-white">
            Lorem ipsum dolor sit amet consectetur. Vel orci lobortis nunc
            lobortis adipiscing. Proin tellus suspendisse vitae diam accumsan.
          </p>
          <button className="bg-[#FBC820] w-40 h-12  rounded-3xl text-center text-lg font-bold text-[#1D5BFC] hover:bg-[#f0b819]">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurBook2;
