import {

GoogleGenAI

}

from "@google/genai";

const ai=

new GoogleGenAI({

apiKey:

import.meta.env

.VITE_GEMINI_API_KEY

});
import type { Day } from "../../types/itinerary";
export async function generateItinerary(
  destination: string,
  budget: string,
  days: number,
  travelStyle: string,
  accommodation: string,
  transport: string
): Promise<Day[]>{

const prompt = `

You are an expert travel planner.

Generate a realistic ${days}-day itinerary.

Destination:
${destination}

Budget:
${budget}

Travel Style:
${travelStyle}

Preferred Accommodation:
${accommodation}

Preferred Transport:
${transport}

For EACH day include:

- estimatedCost
- hotel
- airbnb
- restaurants (3 recommendations)
- attractions (3 recommendations)
- tips
- activities

Return ONLY valid JSON.

Format:

{
  "days":[
    {
      "day":1,
      "estimatedCost":"",
      "hotel":"",
      "airbnb":"",
      "restaurants":[
        "",
        "",
        ""
      ],
      "attractions":[
        "",
        "",
        ""
      ],
      "tips":"",
      "activities":[
        {
          "title":"",
          "description":"",
          "icon":""
        }
      ]
    }
  ]
}

Do not use markdown.

Do not explain.

Return JSON only.

`;
const response=

await ai.models.generateContent({

model:"gemini-2.5-flash",

contents:prompt

});

const text=

response.text??

"";

const cleaned=

text

.replace(/```json/g,"")

.replace(/```/g,"")

.trim();

const parsed=

JSON.parse(

cleaned

);

return parsed.days;

}