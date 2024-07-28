import React, { createContext } from "react";

export const AdSectionContext = createContext();
const AdSectionProvider = ({ children }) => {
  //     const AdObjs = [
  //         {
  //             id: 1,
  //             title: "Ranking Of Kings",
  //             series: "Sub / Dub",
  //             description:
  //               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
  //             category: "Shonen, Fantasy, Adventure, Drama",
  //             image: "https://staticg.sportskeeda.com/editor/2023/06/42005-16875058744906-1920.jpg",
  //             rating: { rate: 3.9, count: 120 },
  //           },
  //           {
  //             id: 2,
  //             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //             series: "Sub / Dub",
  //             description:
  //               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
  //             category: "Shonen, Isekai, Fantasy, Adventure, Drama",
  //             image: "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
  //             rating: { rate: 3.9, count: 120 },
  //           },
  //           {
  //             id: 3,
  //             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //             series: "Subtitled",
  //             description:
  //               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
  //             category: "Shonen, Seinen, Drama, Sci-fic",
  //             image: "https://cdn.oneesports.gg/cdn-data/2023/10/Pluto_Atom_Uran.jpg",
  //             rating: { rate: 3.9, count: 120 },
  //           }
  // ]
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
  };
  const SecondAdObj = {
    id: 2,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    series: "Sub / Dub",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
    category: "Shonen, Isekai, Fantasy, Adventure, Drama",
    image:
      "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  const ThirdAdObj = {
    id: 3,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    series: "Subtitled",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
    category: "Shonen, Seinen, Drama, Sci-fic",
    image: "https://cdn.oneesports.gg/cdn-data/2023/10/Pluto_Atom_Uran.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  return (
    <AdSectionContext.Provider value={{ FirstAdObj, SecondAdObj, ThirdAdObj }}>
      {children}
    </AdSectionContext.Provider>
  );
};

export default AdSectionProvider;
