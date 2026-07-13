import { Timestamp } from "firebase/firestore";
export interface Activity {
  title: string;
  description: string;
  icon: string;
}

export interface Day {
  day: number;
  estimatedCost: number;
  hotel: string;
  airbnb: string;
  restaurants: string[];
  attractions: string[];
  tips: string;
  activities: Activity[];
}

export interface Trip {
  id: string;
  destination: string;
  budget: "Low" | "Medium" | "High";
  days: number;
  travelStyle: string;
  itinerary: Day[];
  accommodationType: string;
  transportType: string;
  favorite: boolean;
  shareable: boolean;
  likes: number;
  likedBy: string[];
  views: number;
  createdAt: Timestamp | null;
}