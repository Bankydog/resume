import DarkModeToggle from "../darkMoad/darkmoad";

const Head = () => {
  return (
    <>
      <div className="h-[230px] w-[1280] flex justify-around bg-white dark:bg-black">
        <div className="">
          <img
            src="./imgs/profile.jpg"
            className="h-[200px] rounded-3xl mt-3 dark:border-2 border-white"
            alt=""
          />
        </div>

        <div className="w-[800px] h-[200px] text-6xl mt-6 mb-6">
          <h1 className="font-abc text-left ml-2 dark:text-white">
            Padet Sukhuange
          </h1>

          <p className="font-drf text-right mt-14 mr-2 dark:text-white">
            นาย เผด็จ สุขห่วง
          </p>
        </div>
        <div className=" mr-16">
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Head;
