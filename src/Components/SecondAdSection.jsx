import React from "react";
import AdSection from "./AdSection";
import Container from "./Container";

const SecondAdSection = () => {
  const SecondAdObj = {
    id: 2,
    title: "Mushoku Tensei: Jobless Reincarnation.",
    series: "Sub / Dub",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
    category: "Shonen, Isekai, Fantasy, Adventure, Drama",
    image:
      "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  return (
    <Container>
      <a title="Watch Mushoku Tensei: Jobless Reincarnation." href="https://www.google.com">
        <div className="flex h-[400px] relative">
          <div className=" absolute top-0 left-0 bottom-0 h-full z-40">
            <img src={SecondAdObj.image} alt="" className=" h-full " />
          </div>
          <div className=" absolute top-0 right-0 bottom-0 w-[950px] bg-gradient-to-l from-[#e4d439] from-[75%] z-50">
            <div className=" w-[240px] flex flex-col gap-20 ml-[28rem] mt-20 items-center">
              <div className=" flex item-center justify-center w-[600px]">
                <p className=" w-full text-4xl bg-gradient-to-tr from-zinc-900 via-lime-800 to-zinc-900 bg-clip-text text-transparent font-bold font-serif text-center text-balance">
                  {SecondAdObj.title}
                </p>
              </div>
              <button className=" pointer-events-none h-[50px] text-2xl font-bold text-white p-4 shadow-md bg-lime-600 flex items-center justify-center">
                WATCH NOW
              </button>
              <span className="text-center font-light">@crunchyroll</span>
            </div>
          </div>
        </div>
      </a>
    </Container>
  );
};

export default SecondAdSection;

// box-shadow: inset -12px -8px 40px #46464620;
