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
import { useEffect } from "react";

const Body = () => {
  return (
    <>
      <div className="w-[100%] h-[900px] flex justify-between dark:bg-black">
        <BodyLeft
          education={Education}
          language={Language}
          hobbies={Hobbies}
          contact={Contact}
        />
        <BodyRight Tools={Tools} MyProject={MyProject} WorkExp={WorkExp} />
      </div>
    </>
  );
};

export default Body;
