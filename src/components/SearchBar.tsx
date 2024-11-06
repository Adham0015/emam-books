"use client";
import Image from "next/image";
import React from "react";

function SearchBar() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex items-center space-x-3 py-4 px-5 bg-[#90a7eb] rounded-3xl"
      onSubmit={handleSearch}
    >
      <button className="cursor-pointer text-white">
        <Image src="/search.png" alt="" width={24} height={24} className="" />
      </button>
      <input
        type="text"
        name="name"
        placeholder="What are you looking for?"
        className="bg-transparent text-white placeholder-white w-full"
      />
      <button className="cursor-pointer rounded-3xl h-6 w-14 bg-[#FBC820] text-[#1D5BFC]">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
