import React from "react";
import AdSection from "./AdSection";
import Container from "./Container";

const ThirdAdSection = () => {
  const ThirdAdObj = {
    id: 3,
    title: "Pluto",
    series: "Subtitled",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
    category: "Shonen, Seinen, Drama, Sci-fic",
    image: "https://cdn.oneesports.gg/cdn-data/2023/10/Pluto_Atom_Uran.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  return (
    <Container>
      <a title="Watch Pluto." href="https://www.google.com" className="">
        <div className="flex h-[400px] relative">
          <div className=" w-[1050px] absolute top-0 left-0 bottom-0 overflow-visible  bg-gradient-to-r from-[#d0020e] from-[65%] z-50">
            <div className=" w-[240px] flex flex-col gap-14 ml-60 mt-20 items-center">
              <div className=" flex item-center justify-center w-[400px]">
                <p className=" w-full text-9xl font-bold font-serif text-center text-balance">
                  {ThirdAdObj.title}
                </p>
              </div>
              <button className=" pointer-events-none h-[50px] text-2xl font-bold text-neutral-900 p-4 shadow-lg bg-gradient-to-br from-amber-600 via-amber-400 to-amber-600 flex items-center justify-center">
                WATCH NOW
              </button>
              <span className="text-center font-light">@crunchyroll</span>
            </div>
          </div>
          <div className=" absolute top-0 right-0 bottom-0 shadow-[inset_-12px_-8px_40px_#facc15] ">
            <img
              src={ThirdAdObj.image}
              alt=""
              className=" h-full shadow-[inset_-12px_-8px_40px_#facc15]"
            />
          </div>
        </div>
      </a>
    </Container>
  );
};

export default ThirdAdSection;
