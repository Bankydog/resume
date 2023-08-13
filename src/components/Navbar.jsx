import React from "react";

const navbar = () => {
  return (
    <div className="grid grid-cols-7 p-4 ">
      <div>
        <span className="m-2 font-specialElite text-3xl tracking-wide font-bold text-blue-800">
          Padet
        </span>
        <span className="m-2 font-specialElite text-3xl tracking-wider font-bold drop-shadow-2xl text-blue-400">
          Sukhuang
        </span>
      </div>
      <div></div>
      <div></div>
      <div className="flex justify-center items-center h-10 mr-5">About</div>
      <div className="flex justify-center items-center h-10 mr-5">Passions</div>
      <div className="flex justify-center items-center h-10 mr-5">
        Portfolio
      </div>
      <div className="flex justify-center items-center h-10 border-2 rounded-2xl border-blue bg-blue text-neutral-50 text-xl font-bold">
        Contact Me
      </div>
    </div>
  );
};

export default navbar;
