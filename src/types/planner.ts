export interface PlannerData {

  destination: string;

  budget:
    | "Low"
    | "Medium"
    | "High";

  days: number;

  travelStyle:
    | "Adventure"
    | "Luxury"
    | "Family"
    | "Relaxation";

  accommodation: string;

  transport: string;

}