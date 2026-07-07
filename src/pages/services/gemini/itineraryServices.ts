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

destination:string,

budget:string,

days:number,

travelStyle:string

):Promise<Day[]>{

const prompt=`

Create a ${days} day itinerary.

Destination:

${destination}

Budget:

${budget}

Travel style:

${travelStyle}

Return ONLY JSON.

Format:

{

"days":[

{

"day":1,

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

No markdown.

No explanation.

Only JSON.

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