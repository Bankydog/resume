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
      </div>
    </>
  );
};

export default Body;
