import DayCard from "../itinerary/DayCard";
import DayDetails from "../itinerary/DayDetails";
import TripHero from "./TripHero";

import type { Itinerary } from "../../types/itinerary";

type Props = {
  destination: string;
  budget: string;
  travelStyle: string;
  accommodationType: string;
  transportType: string;
  days: number;
  itinerary: Itinerary | null;
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
  if (!itinerary || itinerary.days.length === 0) {
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

      {itinerary.days.map((day) => (
        <DayCard
          key={day.day}
          day={day.day}
        >
          <DayDetails day={day} />
        </DayCard>
      ))}
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
            Total Trip Estimate
          </p>

          <h2 className="text-4xl font-bold">
            {itinerary.costSummary.total.toLocaleString("en-KE")} KES
          </h2>

          <p className="text-slate-400">
            Estimated total cost for your {days}-day trip.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-sm text-slate-400">Accommodation</p>
            <p className="mt-1 font-semibold">
              {itinerary.costSummary.accommodation.toLocaleString("en-KE")} KES
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Transport</p>
            <p className="mt-1 font-semibold">
              {itinerary.costSummary.transport.toLocaleString("en-KE")} KES
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Food</p>
            <p className="mt-1 font-semibold">
              {itinerary.costSummary.food.toLocaleString("en-KE")} KES
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Activities</p>
            <p className="mt-1 font-semibold">
              {itinerary.costSummary.activities.toLocaleString("en-KE")} KES
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Miscellaneous</p>
            <p className="mt-1 font-semibold">
              {itinerary.costSummary.miscellaneous.toLocaleString("en-KE")} KES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratedItinerary;