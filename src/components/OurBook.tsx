import Image from "next/image";
import React from "react";

function OurBook() {
  return (
    <div className="max-h-[731px] py-8 px-8 mb-8">
      {/* Top Dashed Border */}
      <div className="border-[2px] border-[#FBC820] border-dashed w-full h-0 mb-8" />

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex flex-col gap-3 max-w-[622px] mx-auto md:mx-0 md:w-1/2 md:text-left lg:ml-24 text-center">
          <Image src="/rocket.png" alt="" width={100} height={100} />

          <h1 className="font-semibold text-4xl md:text-5xl font-DynaPuff text-[#1D5BFC]">
            Our Book fairs!
          </h1>
          <p className="font-normal text-lg text-[#2B2B2B99]">
            Lorem ipsum dolor sit amet consectetur. Laoreet varius est rutrum
            ipsum malesuada purus dis eget ipsum. Interdum volutpat dictum dui
            id. Ipsum sed et nisl posuere diam ullamcorper augue fermentum
            rhoncus. Nibh proin pretium libero accumsan.
          </p>
          <p className="font-normal text-lg text-[#2B2B2B99]">
            Lorem ipsum dolor sit amet consectetur. Vel orci lobortis nunc
            lobortis adipiscing. Proin tellus suspendisse vitae diam accumsan.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="bg-[#FBC820] w-40 h-12 rounded-3xl text-center text-lg font-bold text-[#1D5BFC]">
              Contact us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:ml-32">
          <Image src="/imageg.png" alt="" width={400} height={400} />
        </div>
      </div>

      {/* Bottom Dashed Border */}
      <div className="border-[2px] border-[#FBC820] border-dashed w-full h-0 mt-8" />
    </div>
  );
}

export default OurBook;
