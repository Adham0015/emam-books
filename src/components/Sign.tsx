"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  "/awards.png",
  "/awards2.png",
  "/awards3.png",
  "/awards4.png",
  "/awards2.png",
  "/awards.png",
  "/awards5.png",
  // Add more image paths
];
function Sign() {
  return (
    <div className="">
      {/* mobile */}
      <div className="md:hidden flex items-center justify-center flex-row my-8 max-h-[224px]">
        <div className="w-[300px] h-[50px]">
          <Swiper
            modules={[Pagination]}
            // pagination={{ clickable: true }}
            spaceBetween={6}
            slidesPerView={2.4}
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
      <div className="hidden  md:flex py-8 justify-center">
        <Image src="/awards.png" alt="" width={150} height={50} />
        <Image src="/awards2.png" alt="" width={150} height={50} />
        <Image src="/awards3.png" alt="" width={150} height={50} />
        <Image src="/awards4.png" alt="" width={150} height={50} />
        <Image src="/awards5.png" alt="" width={150} height={50} />
        <Image src="/awards2.png" alt="" width={150} height={50} />
        <Image src="/awards4.png" alt="" width={150} height={50} />
      </div>
    </div>
  );
}

export default Sign;
