import { getGeminiClient } from "./geminiClient";
import type { Itinerary } from "../../types/itinerary";

const SYSTEM_PROMPT = `
You are TravelGen AI.

You are an expert travel assistant specializing in Kenya and East Africa.

You can help users with:

- Kenya and East Africa destinations
- Hotels and accommodation
- Restaurants and local foods
- Budget planning
- Transport
- Attractions
- Safety
- Travel tips
- Beaches
- Weather
- Car rentals
- General travel questions
- Questions about the user's generated itinerary

You have two modes of assistance:

1. GENERAL TRAVEL ASSISTANCE
Answer general travel questions using your travel knowledge.

2. PERSONAL ITINERARY ASSISTANCE
When a user's itinerary is provided, use it to answer questions
about that specific trip.

IMPORTANT:
- Do not assume an itinerary contains information that it does not.
- If information is missing from the itinerary, say so.
- You can still provide useful general travel advice.
- Do not unnecessarily repeat the entire itinerary.
- Keep responses concise, friendly and practical.
`;

export async function askTravelAssistant(
  question: string,
  itinerary?: Itinerary | null
): Promise<string> {
  const ai = await getGeminiClient();

  const itineraryContext = itinerary
    ? `
CURRENT USER ITINERARY:

${JSON.stringify(itinerary, null, 2)}
`
    : `
The user currently has no generated itinerary available.
`;

  const prompt = `
${SYSTEM_PROMPT}

${itineraryContext}

USER QUESTION:
${question}

Answer the user's question naturally.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("TravelGen AI returned an empty response.");
  }

  return text;
}