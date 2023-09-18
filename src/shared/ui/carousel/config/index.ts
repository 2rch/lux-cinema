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
    title: "LUX Cinema",
  },
  {
    image: cinemaView2,
    title: "Your best halls",
  },
  {
    image: soundView1,
    title: "Hear everything from whisper to explosion",
  },
  {
    image: soundView2,
    title: "Hear the picture",
  },
  {
    image: visitorsView,
    title: "Enjoy the show",
  },
];
