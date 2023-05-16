import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div
      className="fixed top-0 w-full bg-slate-800 text-white"
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="font-display flex items-center text-2xl">
          <Image
            src="/logo.svg"
            alt="MySpaces logo"
            width="30"
            height="30"
            className="mr-2 rounded-full fill-white"
          />
          <p>MyApp</p>
        </Link>
        <div>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Navbar;
