import { useState } from "react";
import {
  Education,
  Language,
  Hobbies,
  Contact,
  Tools,
  MyProject,
  WorkExp,
} from "../data/data";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import ScrollToTop from "react-scroll-up";

const Body = () => {
  return (
    <>
      <div className="w-[100%] h-[750px] flex justify-between dark:bg-black bodywrapper1">
        <BodyLeft
          education={Education}
          language={Language}
          hobbies={Hobbies}
          contact={Contact}
        />
        <BodyRight Tools={Tools} MyProject={MyProject} WorkExp={WorkExp} />
      </div>

      {/* ///////////////////////////////// small //////////////////////////////////////////////////////////// */}

      <div className="w-100% h-100% flex flex-col items-center mt-5 dark:bg-black bodywrapper2">
        <div className="mb-5">
          <BodyRight Tools={Tools} MyProject={MyProject} WorkExp={WorkExp} />
        </div>
        <div className="">
          <BodyLeft
            education={Education}
            language={Language}
            hobbies={Hobbies}
            contact={Contact}
          />
        </div>

        <ScrollToTop showUnder={100}>
          <div className="w-[50px] h-[50px] flex justify-center rounded-full items-center dark:bg-white">
            <img
              src="./imgs/arrow-up.png"
              className="w-[30px] h-[30px]"
              alt="push to top page"
            />
          </div>
        </ScrollToTop>
      </div>
    </>
  );
};

export default Body;
