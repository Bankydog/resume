import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./BodyRight.css";
import { Pagination } from "swiper/modules";

const BodyRight = ({ Tools, MyProject, WorkExp }) => {
  return (
    <>
      <div className="w-[850px] bodywrapper1">
        <>
          <div>
            <h2 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              Tools
            </h2>
            <div className="flex justify-center">
              <div
                id="slider"
                className="w-full h-[150px] relative flex items-center pt-6 overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
              >
                {Tools.map((tool, index) => (
                  <div key={index} className="flex-col scroll-m-5">
                    <img
                      src={tool.icon}
                      alt=""
                      className="w-[75px] h-[75px] inline-block cursor-pointer mr-5 mb-2 rounded-xl hover:scale-150 ease-in-out duration-200"
                    />
                    <p className=" text-center dark:text-white">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
        <>
          <div>
            <h3 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              My Project
            </h3>
            <ul className="mt-6">
              {MyProject.map((item, index) => (
                <li key={index} className="text-lg dark:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
        <>
          <div className="mt-6">
            <h4 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              Work Experience
            </h4>
            {WorkExp.map((item, index) => (
              <div key={index} className=" mt-6">
                <p className="text-xl dark:text-white">
                  Company: {item.company}
                  <br />
                  Period: {item.date}
                  <br />
                  Role: {item.role}
                  <br />
                  Responsibility:{" "}
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </>
      </div>

      {/* /////////////////////////////////////////////////////////// */}

      <div className="w-[350px] bodywrapper2">
        <>
          <div className="mb-6">
            <h2 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              Tools
            </h2>
            <div className="h-[100px]">
              <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                className="mySwiper"
              >
                {Tools.map((tool, index) => (
                  <SwiperSlide key={index} className="">
                    <img src={tool.icon} alt={tool.description} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
        <>
          <div>
            <h3 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              My Project
            </h3>
            <ul className="mt-6">
              {MyProject.map((item, index) => (
                <li key={index} className="text-lg dark:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
        <>
          <div className="mt-6">
            <h4 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg dark:text-yellow-400">
              Work Experience
            </h4>
            {WorkExp.map((item, index) => (
              <div key={index} className=" mt-6">
                <p className="text-lg dark:text-white">
                  Company: {item.company}
                  <br />
                  Period: {item.date}
                  <br />
                  Role: {item.role}
                  <br />
                  Responsibility:{" "}
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </>
      </div>
    </>
  );
};
export default BodyRight;
