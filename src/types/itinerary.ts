import { Timestamp } from "firebase/firestore";
//ACTIVITY
export interface Activity {
  title: string;
  description: string;
  icon: string;
  estimatedCost: number;
}
//weather
export interface WeatherInfo {
  condition: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  precipitation: string;
  advice: string;
}
//TripOverview
export interface TripOverview {
  summary: string;
  whatToExpect: string[];
  localFoods: string[];
  placesToHangOut: string[];
  travelTips: string[];
  localCulture: string[];
}
//Daily Meal
export interface MealRecommendation {
  type :"Breakfast" | "Lunch" | "Dinner";
  name: string;
  restaurant: string;
  foodToTry: string;
  description: string;
  estimatedCost: number;
}
//Daily TRANSPORT
export interface TransportInfo{
  method: string;
  description: string;
  estimatedCost: number;
}
//Daily cost breakdown
export interface DailyCostBreakdown {
  accommodation: number;

  transport: number;

  food: number;

  activities: number;

  miscellaneous: number;

  total: number;
}
//day
export interface Day {
  day: number;
  title: string;
  weather: WeatherInfo;
  hotel: string;
  airbnb: string;
  restaurants: string[];
  attractions: string[];
  tips: string;
  activities: Activity[];
  meals: MealRecommendation[];
  transport: TransportInfo;
  cost: DailyCostBreakdown;
}
//trip cost summary
export interface TripCostSummary {
  accommodation: number;

  transport: number;

  food: number;

  activities: number;

  miscellaneous: number;

  total: number;

  currency: "KES";
}
//COMPLETE AI ITINERARY
export interface Itinerary {
  overview: TripOverview;

  weather: WeatherInfo;

  days: Day[];

  costSummary: TripCostSummary;
}
//firebase trip
export interface Trip {
  id: string;

  destination: string;

  budget: Budget;

  days: number;

  travelStyle: string;

  itinerary: Itinerary;

  accommodationType: string;

  transportType: string;

  favorite: boolean;

  shareable: boolean;

  likes: number;

  likedBy: string[];

  views: number;

  createdAt: Timestamp | null;
}
//comments
export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: Timestamp | null;
}
//budget
export type Budget = "Low" | "Medium" | "High";
