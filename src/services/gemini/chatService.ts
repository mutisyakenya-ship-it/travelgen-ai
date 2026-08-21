import { getGeminiClient } from "./geminiClient";
import type { Trip } from "../../types/itinerary";

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
- Questions about the user's saved trips

You have two modes:

1. GENERAL TRAVEL ASSISTANCE

Answer general travel questions using your travel knowledge.

2. PERSONAL TRIP ASSISTANCE

When saved trips are provided, use them to answer
questions about the user's trips.

CURRENT TRIP PRIORITY:

If the user is currently viewing a trip and asks
a question that could refer to that trip, use the
currently viewed trip first.

If the user explicitly mentions another destination
or saved trip, use the matching saved trip.

SAVED TRIP QUESTIONS:

You can answer questions such as:

- What hotel did I choose?
- What restaurants are recommended?
- What activities are planned?
- How much does Day 2 cost?
- How much are the activities on Day 3?
- How much is my entire trip?
- What transport did I choose?
- Compare my saved trips.
- Which trip is cheaper?
- What attractions are included?

COST QUESTIONS:

- For the total cost of activities on a specific day,
  use that day's cost.activities value.

- For the cost of a specific activity,
  use that activity's estimatedCost value.

- For the total cost of a specific day,
  use that day's cost.total value.

- For the total trip cost,
  use costSummary.total.

- Never confuse an individual activity estimatedCost
  with the day's total activities cost.

- Always mention the day when answering day-specific
  cost questions.

IMPORTANT:

- Never invent information.
- Never assume information exists if it is not provided.
- If information is missing, say so.
- General travel questions can still be answered without saved trips.
- Do not unnecessarily repeat the entire itinerary.
- Keep responses concise, friendly and practical.
`;

export async function askTravelAssistant(
  question: string,
  currentTrip: Trip | null,
  trips: Trip[]
): Promise<string> {
  const ai = await getGeminiClient();

  const savedTripsContext =
    trips.length > 0
      ? `
USER'S SAVED TRIPS:

${JSON.stringify(
  trips.map((trip) => ({
    id: trip.id,
    destination: trip.destination,
    budget: trip.budget,
    days: trip.days,
    travelStyle: trip.travelStyle,
    accommodationType: trip.accommodationType,
    transportType: trip.transportType,
    itinerary: trip.itinerary,
  })),
  null,
  2
)}
`
      : `
The user has no saved trips.
`;

  const currentTripContext = currentTrip
    ? `
CURRENTLY VIEWED TRIP:

Trip ID: ${currentTrip.id}
Destination: ${currentTrip.destination}
`
    : `
The user is not currently viewing a specific trip.
`;

  const prompt = `
${SYSTEM_PROMPT}

${currentTripContext}

${savedTripsContext}

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