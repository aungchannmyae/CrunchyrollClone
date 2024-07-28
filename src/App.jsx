import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AdSection from "./Components/AdSection";
import AdSectionProvider, {
  AdSectionContext,
} from "./Context/AdSectionProvider";
import FirstAdSection from "./Components/FirstAdSection";
import SecondAdSection from "./Components/SecondAdSection";
import ThirdAdSection from "./Components/ThirdAdSection";
import RecommedSection from "./Components/RecommedSection";
import NewsSection from "./Components/NewsSection";
import MainImageSlider from "./Components/MainImageSlider";
import ImageSlider from "./Components/ImageSlider";

function App() {
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
  const RecommedSectionData = [
    {
      id: 1,
      title: "NARUTO",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Drama",
      image:
        "https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-0d6bd6-0@3x.png",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      series: "Sub / Dub",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident qui pariatur distinctio nobis nostrum quasi necessitatibus ipsam ipsa iusto.",
      category: "Shonen, Isekai, Fantasy, Adventure, Drama",
      image:
        "https://www.gematsu.com/wp-content/uploads/2024/01/Mushoku-Tensei-Game-PV2_01-06-24.jpg",
      rating: { rate: 3.9, count: 120 },
    },
  ];

  return (
    <main className=" bg-gradient-to-b from-gray-950 from-80% to-gray-800 selection:text-orange-600 overflow-x-hidden">
      <NavBar></NavBar>
      {/* <MainImageSlider></MainImageSlider> */}
      <ImageSlider></ImageSlider>
      {/* <RecommedSection Image={RecommedSectionData[1].image}></RecommedSection> */}
      {/* <FirstAdSection FirstAdObj={FirstAdObj}></FirstAdSection> */}
      <SecondAdSection SecondAdObj={SecondAdObj}></SecondAdSection>
      {/* <RecommedSection Image={RecommedSectionData[0].image} Title={RecommedSectionData[0].title} Version={RecommedSectionData[0].series} Description={RecommedSectionData[0].description}></RecommedSection> */}
      <NewsSection></NewsSection>
      <ThirdAdSection ThirdAdObj={ThirdAdObj}></ThirdAdSection>

      <Footer></Footer>
    </main>
  );
}

export default App;
