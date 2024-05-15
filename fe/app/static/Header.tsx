import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-3 font-bold w-[100%] ">
      <div className="w-full flex flex-row gap-3 ">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
