import React from "react";
import Image from "next/image";
import LogoSvg from "./LogoSvg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative text-white overflow-hidden lg:h-[456px]">
      {/* Background Image and Shape (visible on large screens and above) */}
      <div className="absolute w-full h-full hidden lg:block">
        <Image
          src="/Union1.png"
          alt="Footer Background Shape"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute right-10 bottom-28">
          <Image
            src="/kid.png"
            alt="Kid Image"
            width={300}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1D5BFC] lg:bg-transparent p-2">
        <div className=" relative flex flex-col items-center justify-between  mt-4 md:flex-row lg:max-w-2xl mx-auto lg:py-4  md:px-8 md:py-4 lg:px-12 bg-[#FFFFFF26] rounded-3xl lg:ml-8 lg:mt-60 xl:mt-48">
          <LogoSvg />
          <nav className="flex md:flex-row gap-4 text-center mt-4 md:mt-0">
            <Link
              href="/book-fair"
              className="hover:text-[#FBC820]"
              aria-label="Book Fair"
            >
              Book Fair
            </Link>
            <Link
              href="/another-link"
              className="hover:text-[#FBC820]"
              aria-label="Another Link"
            >
              Another Link
            </Link>
            <Link
              href="/yet-another-link"
              className="hover:text-[#FBC820]"
              aria-label="Yet Another Link"
            >
              Yet Another Link
            </Link>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="relative border-t-[1px] border-[#FFFFFF26] w-full mt-4 md:mt-6" />

        {/* Footer Bottom Text */}
        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-full lg:max-w-5xl mx-auto py-4 px-4 md:px-6 text-center gap-2 md:gap-0">
          <p>All rights reserved to Imam Books Platform in 2024</p>
          <p>Privacy Policy | Cookies Agreement</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
