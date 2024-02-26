import { Education, Language, Hobbies, Contact } from "../data/data";
import BodyLeft from "./BodyLeft";

const Body = () => {
  return (
    <>
      <div className="w-[100%] h-[900px] flex justify-between">
        <BodyLeft
          education={Education}
          language={Language}
          hobbies={Hobbies}
          contact={Contact}
        />
        <div className="w-[1180px] border-solid border-2 border-sky-500">
          <h2 className="">Tools</h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Body;
