import { getGeminiClient } from "./geminiClient";
import type { Budget, Itinerary } from "../../types/itinerary";
import { itinerarySchema } from "../../schema/itinerarySchema";
export async function generateItinerary(
  destination: string,
  budget: Budget,
  days: number,
  travelStyle: string,
  accommodation: string,
  transport: string
): Promise<Itinerary> {
  const ai = await getGeminiClient();

  const prompt = `
You are a professional travel planning engine specializing in travel within Kenya.

Your task is to generate a realistic, useful and personalized ${days}-day travel itinerary.

TRAVELER INFORMATION
--------------------
Destination: ${destination}
Budget Level: ${budget}
Trip Duration: ${days} days
Travel Style: ${travelStyle}
Preferred Accommodation: ${accommodation}
Preferred Transport: ${transport}

IMPORTANT REQUIREMENTS
----------------------

1. DESTINATION OVERVIEW

Provide a concise overview of the destination.

Explain:
- What the traveler should expect to experience.
- The general atmosphere of the destination.
- Major characteristics of the area.
- Important practical considerations.

2. WEATHER

Provide general expected weather conditions for the destination.

Include:
- Typical condition.
- Expected temperature range.
- humidity
- wind speed 
- precipitation
- Practical weather advice.


IMPORTANT:
Do NOT claim to provide a live weather forecast.
Weather information must be presented as general/typical expectations.

3. LOCAL FOOD

Recommend authentic or popular local foods that travelers should try.

Prioritize foods that are relevant to the destination.

4. PLACES TO HANG OUT

Recommend interesting places where travelers can relax, socialize or enjoy the evening.

5. TRAVEL TIPS

Provide practical advice about:
- Safety
- Transport
- Money
- Local etiquette
- Important things to know

6. DAILY ITINERARY

Create exactly ${days} days.

Each day should contain:

- Day number
- Day title
- Weather expectations
- Hotel recommendation
- Airbnb recommendation
- Three restaurant recommendations
- Three attraction recommendations
- Practical tips
- Activities
- Meal recommendations
- Transportation
- Detailed daily cost breakdown

7. ACTIVITIES

Each activity must contain:

- title
- description
- icon
- estimatedCost

The estimated cost must be a NUMBER representing Kenyan Shillings.

8. MEALS

Provide breakfast, lunch and dinner recommendations where appropriate.

Each meal must contain:

- type
- name
- restaurant
- foodToTry
- description
- estimatedCost

Costs must be numbers in Kenyan Shillings.

9. TRANSPORT

Provide the recommended transport method for the day.

Include:

- method
- description
- estimatedCost

10. DAILY COST

For every day provide:

- accommodation
- transport
- food
- activities
- miscellaneous
- total

All values must be numbers in Kenyan Shillings.
IMPORTANT DAILY COST CALCULATION:

The "total" must equal:

accommodation
+ transport
+ food
+ activities
+ miscellaneous

Do not make up a separate total.

The food amount should reasonably reflect the estimated meal costs.

The activities amount should reasonably reflect the estimated activity costs.

The transport amount should reasonably reflect the day's transportation estimate.

The accommodation amount should reasonably reflect the recommended accommodation.

The miscellaneous amount may include reasonable small expenses such as tips, entry fees not already included, parking, or other minor travel expenses.

11. TOTAL TRIP COST

Provide a complete trip cost summary.

Include:

- accommodation
- transport
- food
- activities
- miscellaneous
- total
- currency

The total should represent the estimated cost for the entire trip.

IMPORTANT COST RULES
--------------------

- All monetary values must be numeric.
- Do not include "KES" inside numeric values.
- Use realistic approximate prices for Kenya.
- Costs are estimates, not guaranteed prices.
- Do not invent obviously unrealistic prices.
- Make the budget level affect the recommendations and estimated costs.
IMPORTANT TRIP TOTAL CALCULATION:

The trip "total" must equal the sum of all daily cost totals.

The category totals should represent the sum of those categories across all itinerary days.
BUDGET BEHAVIOR
---------------

LOW:
Prioritize affordable accommodation, local restaurants, public transport and low-cost activities.

MEDIUM:
Balance comfort and affordability.

HIGH:
Allow higher-quality accommodation, private transport, premium restaurants and more expensive experiences.

OUTPUT REQUIREMENTS
--------------------

Return ONLY valid JSON.

Do not use Markdown.

Do not wrap the JSON in triple backticks.

Do not add explanations before or after the JSON.

The JSON must follow EXACTLY this structure:

{
  "overview": {
    "summary": "",
    "whatToExpect": [],
    "localFoods": [],
    "placesToHangOut": [],
    "travelTips": [],
    "localCulture": []
  },

  "weather": {
    "condition": "",
    "temperature": "",
    "humidity": "",
    "windSpeed": "",
    "precipitation": "",
    "advice": ""

  },

  "days": [
    {
      "day": 1,
      "title": "",

      "weather": {
        "condition": "",
        "temperature": "",
        "humidity": "",
        "windSpeed": "",
        "precipitation": "",
        "advice": ""
      },

      "hotel": "",

      "airbnb": "",

      "restaurants": [
        "",
        "",
        ""
      ],

      "attractions": [
        "",
        "",
        ""
      ],

      "tips": "",

      "activities": [
        {
          "title": "",
          "description": "",
          "icon": "",
          "estimatedCost": 0
        }
      ],

      "meals": [
        {
          "type": "Breakfast",
          "name": "",
          "description": "",
          "restaurant": "",
          "foodToTry": "",
          "estimatedCost": 0
        },
        {
          "type": "Lunch",
          "name": "",
          "description": "",
          "restaurant": "",
          "foodToTry": "",
          "estimatedCost": 0
        },
        {
          "type": "Dinner",
          "name": "",
          "description": "",
          "restaurant": "",
          "foodToTry": "",
          "estimatedCost": 0
        }
      ],

      "transport": {
        "method": "",
        "description": "",
        "estimatedCost": 0
      },
      "cost": {
        "accommodation": 0,
        "transport": 0,
        "food": 0,
        "activities": 0,
        "miscellaneous": 0,
        "total": 0
      }
    }
  ],

  "costSummary": {
    "accommodation": 0,
    "transport": 0,
    "food": 0,
    "activities": 0,
    "miscellaneous": 0,
    "total": 0,
    "currency": "KES"
  }
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  const cleaned = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
  const parsed: unknown = JSON.parse(cleaned);

  const result = itinerarySchema.safeParse(parsed);

  if (!result.success) {
    console.error("Itinerary validation failed:", result.error.issues);

    throw new Error("Invalid itinerary structure returned by Gemini.");
  }

  return result.data;
} catch (error) {
  console.error("Gemini JSON parsing or validation error:", error);
  console.error("Gemini response:", text);

  throw new Error(
    "The AI generated an invalid itinerary. Please try again."
  );
}
}