import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="static">
      <div className="xl:text-3xl  flex justify-center text-2xl font-sans font-semibold  text-white  ">
        {title}
      </div>
    </div>
  );
};

export default Heading;
