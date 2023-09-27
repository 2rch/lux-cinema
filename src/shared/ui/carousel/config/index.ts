import cinemaView1 from "../../../assets/carousel/1.jpg";
import cinemaView2 from "../../../assets/carousel/2.png";
import soundView1 from "../../../assets/carousel/3.webp";
import soundView2 from "../../../assets/carousel/4.webp";
import visitorsView from "../../../assets/carousel/5.jpeg";

export interface CarouselElement {
  image: string;
  title: string;
}

export const carouselElements: CarouselElement[] = [
  {
    image: cinemaView1,
    title: "home.cinema_description_1",
  },
  {
    image: cinemaView2,
    title: "cinema_description_2",
  },
  {
    image: soundView1,
    title: "cinema_description_3",
  },
  {
    image: soundView2,
    title: "cinema_description_4",
  },
  {
    image: visitorsView,
    title: "home.cinema_description_5",
  },
];
