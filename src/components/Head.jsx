import DarkModeToggle from "../darkMode/darkmode";
import "./Head.css";

const Head = () => {
  return (
    <>
      <div className="h-[230px] flex justify-around dark:bg-black wrapperFull headwrapper1">
        <div className="ml-14">
          <img
            src="./imgs/profile.jpg"
            className="h-[200px] rounded-3xl mt-3 dark:border-2 border-white"
            alt=""
          />
        </div>

        <div className="w-[800px] h-[200px] text-5xl mt-6 mb-6">
          <h1 className="font-abc text-left ml-2 dark:text-white">
            Padet Sukhuange
          </h1>

          <p className="font-drf text-right mt-14 mr-2 dark:text-white relative">
            Position of interest : "Front-end"
          </p>
        </div>
        <div className="absolute right-[450px] mt-2 ">
          <DarkModeToggle />
        </div>
      </div>

      {/* /////////////////////// small ///////////////////////////// */}

      <div className="h-[300px] mb-10 flex flex-col items-center dark:bg-black headwrapper2">
        <div className="w-[300px] pl-[355px] mt-5 flex justify-end">
          <DarkModeToggle />
        </div>
        <div className="">
          <img
            src="./imgs/profile.jpg"
            className="h-[200px] rounded-3xl dark:border-2 border-white picwrapper"
            alt=""
          />
        </div>

        <div className="w-full h-[30px] text-3xl mt-2">
          <h1 className="font-abc dark:text-white">Padet Sukhuange</h1>

          <h2 className="font-drf dark:text-white">
            Position of interest : "Front-end"
          </h2>
        </div>
      </div>
    </>
  );
};

export default Head;
