import { z } from "zod";
const activitySchema = z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    estimatedCost: z.number(),  
});
const weatherInfoSchema = z.object({
    condition: z.string(),
    temperature: z.string(),
    humidity: z.string(),
    windSpeed: z.string(),
    precipitation: z.string(),  
    advice: z.string(),
});
const tripOverviewSchema = z.object({
    summary: z.string(),
    whatToExpect: z.array(z.string()),
    localFoods: z.array(z.string()),
    placesToHangOut: z.array(z.string()),
    travelTips: z.array(z.string()),
    localCulture: z.array(z.string()),
});
const mealRecommendationSchema = z.object({
    type: z.enum(["Breakfast", "Lunch", "Dinner"]),
    name: z.string(),
    description: z.string(),
    restaurant: z.string(),
    foodToTry: z.string(),
    estimatedCost: z.number()
}); 
const transportInfoSchema = z.object({
    method: z.string(),
    description: z.string(),    
    estimatedCost: z.number()
});
const dailyCostBreakdownSchema = z.object({
    accommodation: z.number(),
    transport: z.number(),
    food: z.number(),
    activities: z.number(),
    miscellaneous: z.number(),
    total: z.number()
});
const daySchema = z.object({
    day: z.number(),
    title: z.string(),
    weather: weatherInfoSchema,
    hotel: z.string(),
    airbnb: z.string(),
    restaurants: z.array(z.string()),
    attractions: z.array(z.string()),
    tips: z.string(),
    activities: z.array(activitySchema),
    meals: z.array(mealRecommendationSchema),
    transport: transportInfoSchema,
    estimatedCost: z.number(),
    cost: dailyCostBreakdownSchema,
});
const tripCostSummarySchema = z.object({
    accommodation: z.number(),
    transport: z.number(),
    food: z.number(),
    activities: z.number(),
    miscellaneous: z.number(),
    total: z.number(),
    currency: z.literal("KES")
});
export const itinerarySchema = z.object({
overview: tripOverviewSchema,
weather: weatherInfoSchema,
days: z.array(daySchema),
costSummary: tripCostSummarySchema
});