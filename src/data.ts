export type CalendarEvent = {
  id: number;
  title: string;
  category: "PERSONAL" | "WORK";
  start: string;
  end: string | null;
};

export const EVENTS: CalendarEvent[] = [
  {
    id: 1,
    title: "Take dog to the park",
    category: "PERSONAL",
    start: "2021-11-19T10:45:00-08:00",
    end: "2021-11-19T11:15:00-08:00"
  },
  {
    id: 2,
    title: "Eat breakfast",
    category: "PERSONAL",
    start: "2021-11-19T07:45:00-08:00",
    end: "2021-11-19T08:15:00-08:00"
  },
  {
    id: 3,
    title: "Lunch with that Guy",
    category: "PERSONAL",
    start: "2021-11-19T11:45:00-08:00",
    end: "2021-11-19T13:15:00-08:00"
  },
  {
    id: 13,
    title: "Write page in memoir",
    category: "PERSONAL",
    start: "2021-11-19T11:15:00-08:00",
    end: "2021-11-19T11:45:00-08:00"
  },
  {
    id: 15,
    title: "Go to Walmart to buy gift for self",
    category: "PERSONAL",
    start: "2021-11-19T13:00:00-08:00",
    end: "2021-11-19T13:45:00-08:00"
  },
  {
    id: 9,
    title: "Go into office and hang out at water cooler",
    category: "WORK",
    start: "2021-11-19T14:00:00-08:00",
    end: "2021-11-19T16:45:00-08:00"
  },
  {
    id: 21,
    title: "Date with Sally at the new Sizzler",
    category: "PERSONAL",
    start: "2021-11-19T17:00:00-08:00",
    end: null
  }
];
