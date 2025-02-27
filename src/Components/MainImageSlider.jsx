import React from "react";

const MainImageSlider = () => {
  return (
    <div id="carousel-example" class="relative w-full">
      {/* <!-- Carousel wrapper --> */}
      <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* <!-- Item 1 --> */}
        <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
          <img
            src="/docs/images/carousel/carousel-1.svg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
          <img
            src="/docs/images/carousel/carousel-2.svg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
          <img
            src="/docs/images/carousel/carousel-3.svg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
          <img
            src="/docs/images/carousel/carousel-4.svg"
            class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          id="carousel-indicator-1"
          type="button"
          class="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          id="carousel-indicator-2"
          type="button"
          class="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
        ></button>
        <button
          id="carousel-indicator-3"
          type="button"
          class="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
        ></button>
        <button
          id="carousel-indicator-4"
          type="button"
          class="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        id="data-carousel-prev"
        type="button"
        class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default MainImageSlider;
