import React from "react";
import Container from "./Container";

const NavBar = () => {
  return (
    <nav className=" w-screen h-[60px] bg-gray-800">
      <div className=" flex h-full items-center justify-between mx-10">
        <div className=" flex w-60 items-center h-full ">
          <div className=" hidden duration-200 hover:bg-gray-900 hover:text-white flex h-full justify-center items-center">
            <div className=" h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 h-full w-[60px] p-3 cursor-pointer "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>

          <div className=" items-center text-2xl font-bold text-orange-600 duration-200 hover:text-white mx-5">
            CRUNCHCLONE
          </div>

          <div className="  hover:bg-gray-900 text-white duration-200 flex gap-1 items-center px-3 py-[18px]">
            BROWSE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4 "
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <a
            href=""
            className=" duration-200 hover:bg-gray-900 text-white flex gap-1 items-center px-3 py-[18px]"
          >
            GAMES
          </a>
          <div className="  hover:bg-gray-900 text-white duration-200 flex gap-1 items-center px-3 py-[18px]">
            NEWS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className=" flex h-full items-center justify-center ">
          <div className=" flex flex-col items-center justify-center h-full px-3 py-[18px] duration-200 hover:bg-gray-900">
            <span className=" text-yellow-500 text-sm">TRY FREE</span>{" "}
            <span className=" text-sm text-white">PREMIUM</span>
          </div>
          <a
            href=""
            className=" text-white duration-200 hover:bg-gray-900 flex items-center justify-center h-full p-[18px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </a>
          <a
            href=""
            className=" text-white duration-200 hover:bg-gray-900 flex items-center justify-center h-full p-[18px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </a>
          <span className=" text-white duration-200 hover:bg-gray-900 flex items-center justify-center h-full p-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
