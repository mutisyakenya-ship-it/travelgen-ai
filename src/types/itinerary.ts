export interface Itinerary {
  id: string;
  destination: string;
  days: number;
  budget: "Low" | "Medium" | "High";
  image?: string;
  createdAt: string;
}