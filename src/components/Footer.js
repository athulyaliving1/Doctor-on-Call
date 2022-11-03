import React from "react";

function Footer() {
  return (
    <div>
      <div className="py-2 text-xs md:text-sm ">
        <div className="w-full border-t-2 border-sky-900"></div>
      </div>
      <div className="flex justify-center px-8 py-4 bg-zinc-50">
        <p className="text-sm font-semibold md:text-lg text-sky-900">
          Copyright © {new Date().getFullYear()}
          <span className="text-pink-500"> Athulya Senior care.</span> All
          rights reserved.
        </p>
      </div>
      <div className="">
        <div className="w-full border-t-4 border-sky-900"></div>
      </div>
    </div>
  );
}

export default Footer;
