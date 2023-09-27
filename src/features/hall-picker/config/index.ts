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
    title: "hall.title_1",
    description: "hall.description_1",
    hallTicketMap: [
      { row: 1, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
      { row: 2, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
      { row: 3, places: [1, 2, 3, 4, null, 5, 6, 7, 8] },
    ],
    ticketPrice: 10000,
  },
  {
    id: 2,
    title: "hall.title_2",
    description: "hall.description_2",
    hallTicketMap: [
      { row: 1, places: [1, 2, 3, null, 4, 5, 6] },
      { row: 2, places: [1, 2, 3, null, 4, 5, 6] },
    ],
    ticketPrice: 50000,
  },
  {
    id: 3,
    title: "hall.title_3",
    description: "hall.description_3",
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
