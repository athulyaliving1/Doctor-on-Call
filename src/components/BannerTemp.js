import React from "react";
import hybanner from "../components/Assets/banner  Md.jpg";

function BannerTemp() {
  return (
    <img
      className="w-full h-auto md:pt-14  object-cover hidden md:block"
      src={hybanner}
      alt="banner"
    ></img>
  );
}

export default BannerTemp;
