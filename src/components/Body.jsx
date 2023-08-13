import React from "react";

const Body = () => {
  return (
    <div className="grid grid-rows-3 h-screen container mx-auto ">
      <div className="grid grid-cols-2">
        <div className="ml-2 text-left">
          <div className="m-5">
            <h1 className="text-xl text-blue-800">Hi !</h1>
            <p className="text-2xl font-bold text-blue-950">
              I'm Padet Sukhuang.
            </p>
            <p className="text-2xl font-bold text-blue-950">
              a Developer's Training of TechUp
            </p>
          </div>
          <div className="m-5 text-base">
            <p>
              I'm looking for a Front-End Developer job,{" "}
              <p>
                like a new technology and discover new things so i think a Dev
                is my answer.
              </p>{" "}
              I have patience, punctual, and honestly. The last one i'm a nice
              guy
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[450px] h-[230px] m-[4px]"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            alt="developer is coding"
          />
        </div>
      </div>
      <div className="">
        <div className="my-1">
          <span className="mr-1 font-serif text-[30px] text-blue-800">
            Additional
          </span>
          <span className="ml-1 font-serif text-[30px] font-bold text-blue-950">
            Passions
          </span>
        </div>
        <div className="grid grid-cols-3">
          <div className="w-[250px] border-1 rounded-xl shadow-3xl ml-[5rem]">
            <div class="flex justify-center">
              <img
                className="w-[135px] pt-1"
                src="https://cdn.pic.in.th/file/picinth/Logo74fee7691d7d4ba6.png"
                alt="Front-End"
                border="0"
              />
            </div>
            <span className="mr-1 font-bold text-[20px]">Front-End</span>
            <span className="text-[20px]">Developer</span>
            <p className="text-[14px]">( Html, CSS, Tailwind )</p>
          </div>
          <div className="w-[250px] border-1 rounded-xl shadow-3xl ml-[5rem]">
            <div class="flex justify-center mt-4">
              <img
                className="w-[155px] h-[120px]"
                src="https://cdn.pic.in.th/file/picinth/undraw_Detailed_analysis_re_tk6j-1.png"
                alt="Back-End"
                border="0"
              />
            </div>
            <span className="mr-1 font-bold text-[20px]">Back-End</span>
            <span className="text-[20px]">Developer</span>
            <p className="text-[14px]">( Node.js, SQL )</p>
          </div>
          <div className="w-[250px] border-1 rounded-xl shadow-3xl ml-[5rem]">
            <div class="flex justify-center mt-4">
              <img
                className="w-[135px] h-[120px]"
                src="https://cdn.pic.in.th/file/picinth/undraw_Design_process_re_0dhf-1.png"
                alt="UI/UX"
                border="0"
              />
            </div>
            <span className="mr-1 font-bold text-[20px]">UI/UX</span>
            <span className="text-[20px]">Designr</span>
            <p className="text-[14px]">( Figma, Adobe PS )</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="my-1">
            <span className="mr-1 font-serif text-[30px] text-blue-800">
              My
            </span>
            <span className="ml-1 font-serif text-[30px] font-bold text-blue-950">
              Portfolio
            </span>
          </div>
          <div className="grid grid-cols-3">
            <div className="w-[250px] h-[190px] border-1 rounded-xl shadow-3xl ml-[5rem]">
              <div class="flex justify-center">
                <img
                  className="w-[240px] pt-1"
                  src="https://cdn.pic.in.th/file/picinth/1234ce3e6358c582adbc.png"
                  alt="First-Project"
                  border="0"
                />
              </div>
            </div>
            <div className="w-[250px] h-[190px] border-1 rounded-xl shadow-3xl ml-[5rem]">
              <div class="flex justify-center">
                <img
                  className="w-[240px] pt-1"
                  src="https://cdn.pic.in.th/file/picinth/5678.png"
                  alt="Second-Project"
                  border="0"
                />
              </div>
            </div>
            <div className="w-[250px] h-[190px] border-1 rounded-xl shadow-3xl ml-[5rem]">
              <div class="flex justify-center">
                <img
                  className="w-[240px] pt-1"
                  src="https://cdn.pic.in.th/file/picinth/9012.png"
                  alt="Third-Project"
                  border="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
