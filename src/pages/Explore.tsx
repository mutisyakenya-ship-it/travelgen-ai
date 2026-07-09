import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getSharedTrips } from "./services/firebase/trips";
import type { Day } from "./types/itinerary";

type Trip = {
  id: string;
  destination: string;
  budget: string;
  travelStyle: string;
  days: number;
  likes: number;
  views: number;
  favorite: boolean;
  shareable: boolean;
  itinerary: Day[];
};

function Explore() {
  // States
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter,] = useState("All");

  // Load trips
  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    try {
      const data = await getSharedTrips();
      setTrips(data as Trip[]);
    } catch (error) {
      console.error("Failed to load shared trips:", error);
    } finally {
      setLoading(false);
    }
  }

  // Filter trips
  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch = trip.destination
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || trip.travelStyle === filter;

      return matchesSearch && matchesFilter;
    });
  }, [trips, search, filter]);

  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading trips...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold">Explore Trips</h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search destination..."
          className="mt-6 w-full rounded-xl border p-4"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTrips.map((trip) => (
            <Link key={trip.id} to={`/share/${trip.id}`}>
              <div className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl">
                <h2 className="text-2xl font-bold">
                  {trip.destination}
                </h2>

                <p className="mt-2 text-slate-500">
                  {trip.travelStyle}
                </p>

                <div className="mt-4 flex justify-between">
                  <span>{trip.likes}</span>
                  <span> {trip.views}</span>
                </div>

                <div className="mt-3">
                  {trip.days} Days
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;