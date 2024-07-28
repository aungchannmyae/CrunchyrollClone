import React, { useRef, useState } from "react";
import Container from "./Container";

const Footer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const HandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    console.log(drawerOpen);
  };

  return (
    <Container>
      <div className=" pt ">
        <div className=" w-full py-10">
          <div className=" mb-10 flex justify-between">
            <div className=" w-[250px]">
              <h1 className=" text-white text-lg mb-2 ">Navigation</h1>
              <ul className=" flex flex-col gap-1 p-1">
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Browse Popular
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Browse Simulcasts
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Release Calender
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Games
                  </a>
                </li>
              </ul>
            </div>
            <div className=" w-[250px]">
              <h1 className=" text-white text-lg mb-2">Connect With Us</h1>
              <ul className=" flex flex-col gap-1 p-1">
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div className=" w-[250px]">
              <h1 className=" text-white text-lg mb-2">Crunchyroll</h1>
              <ul className=" flex flex-col gap-1 p-1">
                <li>
                  <a
                    className=" hover:underline duration-200 text-yellow-500 hover:text-white"
                    href=""
                  >
                    Start a Free Trial
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    AdChoices Do Not Sell or Share My Personal Information
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Cookie Consent Tool
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Press Inquiries
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Get the Apps
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Redeem Gift Card
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className=" w-[250px]">
              <h1 className=" text-white text-lg mb-2">Account</h1>
              <ul className=" flex flex-col gap-1 p-1">
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Create Account
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:underline duration-200 text-gray-400 hover:text-white"
                    href=""
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-between pt-10 border-t border-gray-500">
            <div className=" text-gray-500 flex ">
              <span className=" mr-3 text-2xl uppercase pointer-events-none select-none">
                Sony Pictures
              </span>
              <p className=" py-1 pl-3 border-l border-gray-600">
                @ Crunchyroll, LLC
              </p>
            </div>
            <select className=" selection:border-none mr-10 p-2 duration-200 hover:bg-black focus:bg-black focus:text-gray-400 hover:text-gray-400 uppercase decoration-transparent bg-transparent text-gray-500 border-none w-[170px]" name="" id="">
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(US)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(UK)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(Europe)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(India)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(Russia)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(Australia)</option>
              <option className=" p-2 bg-gray-900 text-gray-500" value="">English(Canada)</option>
            </select>


            {/* <div
              
              className=" cursor-pointer flex justify-between items-center w-[140px] p-3 text-gray-500 bg-transparent duration-200 hover:text-white hover:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>

              <select>
                <option value="English(US)">English(US)</option>
              </select>
            </div> */}
          </div>
          {/* <div className=" relative duration-300">
            <ul
              className={` ${
                drawerOpen && " select-none z-50 w-[200px] h-[400px] duration-300 overflow-y-scroll bg-gray-900 absolute -top-[449px] right-0 " || "hidden"
              }`}
            >
              <li ref={selectRef} onClick={HandleSelect} className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
              <li className=" py-3 px-5 duration-200 text-gray-500 hover:bg-black hover:text-white">
                English(UK)
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
