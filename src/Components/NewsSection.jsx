import React from "react";
import Container from "./Container";

const NewsSection = () => {
  return (
    <div className=" w-screen bg-orange-700">
      <Container>
        <div className=" w-full bg-black my-6">
          <div className=" p-10 h-full">
            <div className=" p-2 flex justify-between items-center text-white">
              <h1 className=" text-3xl flex items-center font-semibold">
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
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>
                CrunchClone News
              </h1>
              <a href="">
                <span className=" uppercase flex gap-3 duration-200 text-gray-400 hover:text-gray-300 font-medium items-center">
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className=" p-2 flex justify-between ">
              <div className=" w-[400px]">
                <div>
                  <h1 className=" px-2 text-white">Top News</h1>
                  <div className=" p-2 duration-300 hover:bg-gray-900">
                    <img
                      className=""
                      src="https://a.storyblok.com/f/178900/1080x607/d0926aa4b4/e3b991c95e179d82b71892e9add36ba01671265352_main.jpg/m/filters:quality(95)format(webp)"
                      alt=""
                    />
                    <h1 className=" text-white text-2xl font-semibold">
                      SPY x FAMILY Season 3 TV Anime Officially Announced
                    </h1>
                    <p className=" text-gray-400">
                      Jun 9, 2024 1:31 PM GMT+0630
                    </p>
                    <span className=" text-gray-400">by Kyle Cardine</span>
                  </div>
                  <div className=" p-2 duration-300 hover:bg-gray-900">
                    <img
                      className=""
                      src="https://a.storyblok.com/f/178900/1080x607/d0926aa4b4/e3b991c95e179d82b71892e9add36ba01671265352_main.jpg/m/filters:quality(95)format(webp)"
                      alt=""
                    />
                    <h1 className=" text-white text-2xl font-semibold">
                      SPY x FAMILY Season 3 TV Anime Officially Announced
                    </h1>
                    <p className=" text-gray-400">
                      Jun 9, 2024 1:31 PM GMT+0630
                    </p>
                    <span className=" text-gray-400">by Kyle Cardine</span>
                  </div>
                </div>
                
              </div>
              <div className=" w-[850px]">
                <h1 className=" px-2 text-white">Latest</h1>
                <div className=" flex flex-col">
                  <div className=" p-2 flex gap-2 duration-300 hover:bg-gray-900">
                    <img
                      className=" w-[120px]"
                      src="https://a.storyblok.com/f/178900/1080x607/d0926aa4b4/e3b991c95e179d82b71892e9add36ba01671265352_main.jpg/m/filters:quality(95)format(webp)"
                      alt=""
                    />
                    <div>
                      <h1 className=" text-white font-semibold">
                        SPY x FAMILY Season 3 TV Anime Officially Announced
                      </h1>
                      <p className=" text-gray-400">
                        Jun 9, 2024 1:31 PM GMT+0630
                      </p>
                      <span className=" text-gray-400">by Kyle Cardine</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsSection;
