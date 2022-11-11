import React from "react";
import mbbanner from "../../Assest/Mbbanner.jpg";

function SMbanner() {
  return (
    <div className="block md:hidden  ">
      <div className="pt-10   ">
        <img
          className="  w-full h-full  md:pt-12 md:hidden block"
          src={mbbanner}
          alt="banner "
        />
      </div>
    </div>
  );
}

export default SMbanner;
