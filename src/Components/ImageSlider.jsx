import React from "react";

const ImageSlider = () => {
  const ImageSliderItems = [
    {
      id: 1,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 3,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 4,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 5,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 6,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 7,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 8,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 9,
      title: "Attack On Titan",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Fantasy, Adventure, Drama",
      image:
        "https://resizing.flixster.com/8vh7IO1b1ObVGpYXEYo0XJWqYPc=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      rating: { rate: 3.9, count: 120 },
    },
  ];

  return (
    <div className=" w-screen my-10">
      <div>
        <div className=" w-full h-full">
          <h1 className=" text-white text-4xl mx-14 mb-3">Most Popular</h1>
          <div className=" snap-x snap-mandatory scrollbar-hide flex flex-row gap-4 whitespace-normal overflow-auto">
            {ImageSliderItems.map((ImageSliderItem) => (
              <div
                key={ImageSliderItem.id}
                className=" snap-center first:ml-[50px] last:mr-[70px] group relative snap-x"
              >
                <div className="  z-[9999] opacity-[1] w-[250px] block p-2">
                  <img
                    className=" group-hover:hidden"
                    src={ImageSliderItem.image}
                    alt=""
                  />
                  <div className=" group-hover:hidden w-[250px]">
                    <h1 className=" text-wrap text-white">
                      {ImageSliderItem.title}
                    </h1>
                    <p className=" text-gray-300">{ImageSliderItem.series}</p>
                  </div>
                </div>

                <div className="">
                  <a
                    title={ImageSliderItem.title}
                    className=" z-50 text-white p-2 flex flex-col duration-200 opacity-[0] absolute top-[0%] left-[0%] h-[100%] w-[100%] group-hover:bg-zinc-900 group-hover:opacity-[1] "
                    href=""
                  >
                    <h1 className=" z-50">{ImageSliderItem.title}</h1>
                    <span className=" z-50">
                      {ImageSliderItem.rating.rate} &hearts; (
                      {ImageSliderItem.rating.count}){" "}
                    </span>
                    <p className=" z-50">{ImageSliderItem.description}</p>
                    <div className=" z-50 mt-auto gap-5 flex justify-between w-[100px] ">
                      <button
                        title="Play"
                        className={` relative before:hidden before:duration-300 before:hover:inline-block before:content-["PlayEp1"] before:text-center before:items-center before:text-white before:bg-gray-500 before:absolute before:p-3 before:-top-14 before:-left-[25px] after:content-[""] after:hidden after:hover:inline-block after:duration-300 after:absolute after:border-[10px] after:border-transparent after:border-t-gray-500 after:border-b-0 after:-top-2 after:left-1 `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke=" rgb(234 88 12)"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                      </button>
                      <button title="Add To Watchlist"
                        className={` relative before:hidden before:duration-300 before:hover:inline-block before:content-["AddToWatchlist"] before:text-center before:items-center before:text-white before:bg-gray-500 before:absolute before:p-3 before:-top-14 before:-left-[54px] after:content-[""] after:hidden after:hover:inline-block after:duration-300 after:absolute after:border-[10px] after:border-transparent after:border-t-gray-500 after:border-b-0 after:-top-2 after:left-1 `}
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke=" rgb(234 88 12)"
                          className="size-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                          />
                        </svg>
                      </button>
                      <button title="Add To Crunchlist"
                        className={` relative before:hidden before:duration-300 before:hover:inline-block before:content-["AddToCrunchlist"] before:text-center before:items-center before:text-white before:bg-gray-500 before:absolute before:p-3 before:-top-14 before:-left-[55px] after:content-[""] after:hidden after:hover:inline-block after:duration-300 after:absolute after:border-[10px] after:border-transparent after:border-t-gray-500 after:border-b-0 after:-top-2 after:left-[6px] `}
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke=" rgb(234 88 12)"
                          className="size-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>

                    <img
                      className=" absolute top-0 right-0 h-full opacity-[0] duration-200 group-hover:opacity-[0.1]"
                      src={ImageSliderItem.image}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
