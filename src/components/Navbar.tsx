"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Updated import
import LogoSvg from "./LogoSvg";
import Menu from "./Menu";

function Navbar() {
  const pathname = usePathname(); // Get the current path
  return (
    <div className="flex pt-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#1D5BFC] w-screen ">
      {/* mobile */}
      <div className="flex items-center justify-between px-4 pb-4 w-full md:hidden">
        <Link href="/">
          <LogoSvg />
        </Link>
        <Menu />
        {/* language */}
      </div>
      {/* Bigger screen */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1440px] mx-auto px-8 pb-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <LogoSvg />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            href="/bookfair"
            className={`text-lg font-bold ${
              pathname === "/bookfair"
                ? "text-[#FBC820] underline"
                : "text-white"
            }`}
          >
            Book fair
          </Link>
          <Link
            href="/buybook"
            className={`text-lg font-bold ${
              pathname === "/buybook"
                ? "text-[#FBC820] underline"
                : "text-white"
            }`}
          >
            Buy book
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-bold ${
              pathname === "/contact"
                ? "text-[#FBC820] underline"
                : "text-white"
            }`}
          >
            Contact us
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          {/* <Image src="/global.png" alt="Global" width={24} height={24} /> */}
          <Link href="/" className="text-white">
            EN
          </Link>
          <div className="w-0.5 h-6 bg-white" />
          <Link href="/" className="text-white">
            AR
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
