import React from "react";
import AdSection from "./AdSection";
import Container from "./Container";

const FirstAdSection = () => {
  const FirstAdObj = {
    id: 1,
    title: "Ranking Of Kings",
    series: "Sub / Dub",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
    category: "Shonen, Fantasy, Adventure, Drama",
    image:
      "https://staticg.sportskeeda.com/editor/2023/06/42005-16875058744906-1920.jpg",
    rating: { rate: 3.9, count: 120 },
    linkurl: `google.com`,
  };

  return (
    <Container>
      <a title="Watch Ranking Of Kings." href="https://www.google.com">
        <div className="flex h-[400px] ">
          <div className=" w-[700px] bg-gradient-to-r from-yellow-500 from-75% to-yellow-400">
            <div className=" w-[240px] flex flex-col gap-14 m-auto mt-8 items-center">
              <div className=" flex item-center justify-center w-[260px]">
                <p className=" w-full text-6xl font-bold font-serif text-center text-balance">
                  {FirstAdObj.title}
                </p>
              </div>
              <button className=" pointer-events-none h-[50px] text-2xl font-bold text-neutral-900 p-4 shadow-md bg-gradient-to-br from-amber-600 via-amber-400 to-amber-600 flex items-center justify-center">
                WATCH NOW
              </button>
              <span className="text-center font-light">@crunchyroll</span>
            </div>
          </div>
          <div className=" shadow-[inset_-12px_-8px_40px_#facc15]">
            <img
              src={FirstAdObj.image}
              alt=""
              className=" shadow-[inset_-12px_-8px_40px_#facc15] h-full p-3 bg-gradient-to-r from-yellow-400 from-50% to-yellow-300"
            />
          </div>
        </div>
      </a>
    </Container>
  );
};

export default FirstAdSection;
