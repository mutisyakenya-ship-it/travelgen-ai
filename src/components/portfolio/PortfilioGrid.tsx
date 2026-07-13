import TripCard from "./TripCard";

import type { Trip } from "../../types/itinerary";

type Props = {
  trips: Trip[];
};

function PortfolioGrid({ trips }: Props) {
  if (trips.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">

        <div className="text-6xl">
          🌍
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          No trips yet
        </h2>

        <p className="mt-3 text-slate-500">
          Generate your first AI itinerary to start building your portfolio.
        </p>

      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
        />
      ))}
    </div>
  );
}

export default PortfolioGrid;