import Image from "next/image";
import React from "react";

function Partner() {
  return (
    <div className=" flex flex-col items-center justify-center mx-auto max-w-[1272px] gap-8 sm:gap-10 md:gap-12 p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#1D5BFC] to-[#1D42A1] overflow-hidden">
      {/* Title */}
      <h1 className="font-DynaPuff font-semibold mt-4 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl text-center text-white">
        Why Partner with Us?
      </h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
        {/* Cards */}
        {[
          {
            imgSrc: "/1.png",
            title: "Earning a percentage of the book fair profits.",
            description: "Supporting collaboration and funding initiatives.",
          },
          {
            imgSrc: "/2.png",
            title: "We handle everything.",
            description:
              "From setup to management so your staff can focus on teaching.",
          },
          {
            imgSrc: "/3.png",
            title: "Minimizing disruptions to the school schedule.",
            description: "The entire setup takes place on Saturdays.",
          },
          {
            imgSrc: "/4.png",
            title: "Promoting Cultural Growth and Excellence.",
            description:
              "Enhancing your school’s image and promotes cultural growth.",
          },
          {
            imgSrc: "/5.png",
            title: "Empowering a Love for Reading.",
            description:
              "Inspiring students to engage with books and foster lifelong learning.",
          },
          {
            imgSrc: "/6.png",
            title: "Quality Books from Top Publishers.",
            description:
              "Providing books from premium, reputable publishers to ensure the highest quality.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[280px] lg:max-w-[304px] gap-4 p-4 md:p-6 bg-white bg-opacity-10 rounded-lg"
          >
            <Image src={card.imgSrc} alt="" width={41} height={62} />
            <h2 className="font-bold text-lg sm:text-xl text-white">
              {card.title}
            </h2>
            <p className="font-normal text-xs sm:text-sm text-[#FFFFFFB2]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="w-full flex justify-center">
        <button className="bg-[#FBC820] px-6 sm:px-8 py-3 sm:py-4 rounded-3xl text-center text-sm sm:text-base font-bold text-[#1D5BFC] mt-6 md:mt-8">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Partner;
