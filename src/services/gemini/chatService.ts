import { getGeminiClient } from "./geminiClient";

const SYSTEM_PROMPT = `
You are TravelGen AI.

You are an expert travel assistant specializing in Kenya and East Africa.

Help users with:
- Destinations
- Hotels
- Restaurants
- Budget planning
- Transport
- Attractions
- Safety
- Travel tips
- Beaches
- Local streets
-Local foods
-Weather
-Car rentals

Keep responses concise, friendly and practical.
`;

export async function askTravelAssistant(
  question: string
): Promise<string> {

  const ai = await getGeminiClient();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${SYSTEM_PROMPT}\n\nUser:\n${question}`,
  });

  const text = response.text ?? "";
  return text;
}