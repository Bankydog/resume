import "./App.css";
import "./index.css";
import Head from "./components/Head";
import Body from "./components/Body";
import ScrollToTop from "react-scroll-up";

function App() {
  return (
    <div className=" dark:bg-black">
      <Head />
      <Body />
      <ScrollToTop showUnder={100}>
        <div className="w-[50px] h-[50px] flex justify-center rounded-full items-center ease-in duration-200 hover:bg-sky-300 dark:bg-white dark:hover:bg-yellow-400">
          <img
            src="./imgs/arrow-up.png"
            className="w-[30px] h-[30px]"
            alt="push to top page"
          />
        </div>
      </ScrollToTop>
    </div>
  );
}

export default App;
