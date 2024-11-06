"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Book fair</Link>
          <Link href="/">Buy book</Link>
          <Link href="/">contact us</Link>
          <div className="flex items-center gap-1 mb-12">
            <Link href="/" className="text-white">
              AR
            </Link>
            <div className="w-0.5 h-6 bg-white" />
            <Link href="/" className="text-white">
              EN
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
