import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="my-1">
        <span className="mr-1 font-serif text-[30px] text-blue-800">My</span>
        <span className="ml-1 font-serif text-[30px] font-bold text-blue-950">
          Portfolio
        </span>
      </div>
      <div className="grid grid-cols-4">
        <div className="w-[250px] ml-7">
          <a href="https://github.com/Bankydog">
            <div class="flex justify-center mt-4">
              <img
                className="w-[166px]"
                src="https://cdn.pic.in.th/file/picinth/1233ef16a06c518b7f6.png"
                alt="Github"
                border="0"
              />
            </div>
            <span className="font-serif text-[50px]">Github</span>
          </a>
        </div>

        <div className="grid grid-cols-4">
          <div className="w-[250px] ml-7">
            <a href="https://www.instagram.com/">
              <div class="flex justify-center mt-4">
                <img
                  className="w-[166px]"
                  src="https://cdn.pic.in.th/file/picinth/Background-4.png"
                  alt="Instagram"
                  border="0"
                />
              </div>
              <span className="font-serif text-[50px]">Instagram</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="w-[250px] ml-7">
            <a href="https://github.com/Bankydog">
              <div class="flex justify-center mt-4">
                <img
                  className="w-[166px]"
                  src="https://cdn.pic.in.th/file/picinth/Background-1a829d8d61050735e.png"
                  alt="Email"
                  border="0"
                />
              </div>
              <span className="font-serif text-[50px]">Email</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="w-[250px] ml-7">
            <a href="https://github.com/Bankydog">
              <div class="flex justify-center mt-4">
                <img
                  className="w-[166px]"
                  src="https://cdn.pic.in.th/file/picinth/Background-2.png"
                  alt="Telp"
                  border="0"
                />
              </div>
              <span className="font-serif text-[50px]">Telp</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.pic.in.th/file/picinth/Vector-2.png"
          alt="Bank-resume"
        />
      </div>
    </div>
  );
};

export default Footer;
