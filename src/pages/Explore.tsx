import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { getSharedTrips } from "../services/firebase/trips";

import type { Trip } from "../types/itinerary";

export default function Explore() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    try {
      const data = await getSharedTrips();
      setTrips(data);
    } catch (error) {
      console.error("Failed to load trips:", error);
    } finally {
      setLoading(false);
    }
  }

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) =>
      trip.destination
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [trips, search]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">
          Loading shared trips...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Explore Shared Trips
          </h1>

          <p className="mt-2 text-slate-600">
            Browse itineraries shared by the TravelGen AI community.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-10 w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
        />

        {filteredTrips.length === 0 ? (

          <div className="rounded-2xl bg-white p-12 text-center shadow">

            <h2 className="text-2xl font-bold">
              No trips found
            </h2>

            <p className="mt-2 text-slate-500">
              Try searching for another destination.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredTrips.map((trip) => (

              <Link
                key={trip.id}
                to={`/share/${trip.id}`}
              >

                <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <h2 className="text-2xl font-bold text-slate-800">
                    {trip.destination}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    {trip.travelStyle}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                      {trip.days} Days
                    </span>

                    <span className="font-semibold text-slate-700">
                      {trip.budget}
                    </span>

                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm text-slate-500">

                    <span>
                      👍 {trip.likes}
                    </span>

                    <span>
                      👀 {trip.views}
                    </span>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {trip.favorite && (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-600">
                        Favorite
                      </span>
                    )}

                    {trip.shareable && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                        Shared
                      </span>
                    )}

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}