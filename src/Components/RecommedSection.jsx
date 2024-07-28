import React from "react";
import Container from "./Container";

const RecommedSection = (props) => {

  return (
    <Container>
      <div className=" flex justify-between h-[400px]">
        <div className=" h-full relative w-[680px]">
          <img className=" h-full object-cover" src={props.Image} alt="" />
          <a
            className=" flex justify-center items-center duration-500 opacity-[0] bg-black absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] h-[100%] w-[100%] hover:opacity-[0.7]"
            href=""
          >
            <span className=" text-white uppercase font-semibold text-xl">To Series</span>
          </a>
        </div>
        <div className=" h-full py-[90px] w-[680px]">
            <div className="">
                <div className=" flex flex-col gap-4 mb-10">
                    <a className=" text-3xl text-white hover:underline duration-200 " href="">{props.Title}</a>
                    <span className=" text-gray-400"><span className=" text-cyan-500">Series &#9830; </span>{props.Version}</span>
                    <p className=" text-white">{props.Description}</p>
                </div>
                <div className=" w-[400px] flex gap-3">
                    <a className=" select-none uppercase flex justify-center items-center px-3 py-2 border border-orange-600 bg-orange-600 w-[180px] duration-200 hover:border-orange-500 hover:bg-orange-500" href="">
                        Start Watching
                    </a>
                    <a className=" uppercase flex justify-center items-center px-3 py-2 border border-orange-600  text-orange-600 w-[180px] duration-200 hover:text-orange-500 hover:border-orange-500" href="">Add To WatchList</a>
                </div>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default RecommedSection;
