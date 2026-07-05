import type { Itinerary } from "../types/itinerary";

export const mockTrips: Itinerary[] = [
  {
    id: "1",
    destination: "Naivasha",
    days: 3,
    budget: "Medium",
    createdAt: "Today",
    image: "",
  },

  {
    id: "2",
    destination: "Diani",
    days: 5,
    budget: "High",
    createdAt: "Yesterday",
    image: "",
  },

  {
    id: "3",
    destination: "Maasai Mara",
    days: 4,
    budget: "Medium",
    createdAt: "2 days ago",
    image: "",
  },
  {
    id: "4",
    destination: "Nairobi",
    days: 2,
    budget: "Low",
    createdAt: "3 days ago",
    image: "",
  },
  {
    id: "5",
    destination: "Mombasa",
    days: 6,
    budget: "High",
    createdAt: "4 days ago",
    image: "",
  },
];