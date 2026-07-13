import DayCard from "../itinerary/DayCard";
import Timeline from "../itinerary/TimeLine";
import TripHero from "./TripHero";

import type { Day } from "../../types/itinerary";

type Props = {
  destination: string;
  budget: string;
  travelStyle: string;
  accommodationType: string;
  transportType: string;
  days: number;
  itinerary: Day[];
};

function GeneratedItinerary({
  destination,
  budget,
  travelStyle,
  accommodationType,
  transportType,
  days,
  itinerary,
}: Props) {
  if (itinerary.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
        <div className="text-6xl">🌍</div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          Your AI itinerary will appear here
        </h2>

        <p className="mt-3 text-slate-500">
          Fill in the planner above and click{" "}
          <span className="font-semibold text-green-700">
            Generate Itinerary
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">

      <TripHero
        destination={destination}
        budget={budget}
        travelStyle={travelStyle}
        accommodationType={accommodationType}
        transportType={transportType}
        days={days}
      />

      <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 p-8 text-white shadow-xl">
        <h2 className="text-4xl font-bold">
          Your AI Travel Plan
        </h2>

        <p className="mt-2 text-green-100">
          Your personalized itinerary has been generated successfully.
        </p>
      </div>

      {itinerary.map((day) => (
        <DayCard
          key={day.day}
          day={day.day}
        >
          <div className="space-y-6">

            <Timeline
              activities={day.activities ?? []}
            />

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-green-50 p-5 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                   Estimated Cost
                </h3>

                <p className="mt-2 text-slate-700">
                  {day.estimatedCost || "Not available"}
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                   Hotel
                </h3>

                <p className="mt-2 text-slate-700">
                  {day.hotel || "No hotel recommendation"}
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-700">
                   Airbnb
                </h3>

                <p className="mt-2 text-slate-700">
                  {day.airbnb || "No Airbnb recommendation"}
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-700">
                   Attractions
                </h3>

                {(day.attractions ?? []).length > 0 ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    {day.attractions.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-slate-700">
                    No attractions available.
                  </p>
                )}
              </div>

            </div>

            <div className="rounded-2xl bg-yellow-50 p-5 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-yellow-700">
         Restaurants
              </h3>

              {(day.restaurants ?? []).length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {day.restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-slate-700">
                  No restaurant recommendations.
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-slate-100 p-5 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                Travel Tips
              </h3>

              <p className="mt-2 text-slate-700">
                {day.tips || "No travel tips available."}
              </p>
            </div>

          </div>
        </DayCard>
      ))}
    </div>
  );
}

export default GeneratedItinerary;