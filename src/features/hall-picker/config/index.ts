export interface CinemaHall {
  id: number;
  title: string;
  description: string;
  hallTicketMap: HallTicketRow[];
  ticketPrice: number;
}

export interface HallTicketRow {
  row: number;
  places: (number | null)[];
}

export const cinemaHalls: CinemaHall[] = [
  {
    id: 1,
    title: "2D Sound Pro",
    description:
      "In this hall you are going to have huge TechPro++ 2D projector screen with advanced 8D sound around you",
    hallTicketMap: [
      { row: 1, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
      { row: 2, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
      { row: 3, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
    ],
    ticketPrice: 10000,
  },
  {
    id: 2,
    title: "LUX Comfort",
    description:
      "In this hall you are going to have one of 12 comfortable places with beautiful red puffs and great audio and video quality",
    hallTicketMap: [
      { row: 1, places: [1, 2, 3, null, 4, 5, 6] },
      { row: 2, places: [1, 2, 3, null, 4, 5, 6] },
    ],
    ticketPrice: 50000,
  },
  {
    id: 3,
    title: "LUX Huge 3D",
    description:
      "In this hall you can feel all the power of our 16D sound and 4D effects like wind, water and moving chairs",
    hallTicketMap: [
      { row: 1, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
      { row: 2, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
      { row: 3, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
      { row: 4, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
      { row: 5, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
      { row: 6, places: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
    ],
    ticketPrice: 30000,
  },
];
