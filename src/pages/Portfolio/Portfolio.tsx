import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebase/firebase";
import { getTrips } from "../../services/firebase/trips";

import PortfolioGrid from "../../components/portfolio/PortfilioGrid";

import type { Trip } from "../../types/itinerary";

function Portfolio() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await getTrips(user.uid);
      setTrips(data);
    } catch (error) {
      console.error("Failed to load trips", error);
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
  }, [search, trips]);

  const stats = useMemo(() => {
    return {
      total: trips.length,
      favorites: trips.filter((trip) => trip.favorite).length,
      shared: trips.filter((trip) => trip.shareable).length,
      likes: trips.reduce(
        (sum, trip) => sum + trip.likes,
        0
      ),
    };
  }, [trips]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">
          Loading your trips...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              My Portfolio
            </h1>

            <p className="mt-2 text-slate-600">
              Manage every AI itinerary you've created.
            </p>

          </div>

          <Link
            to="/planner"
            className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            + New Trip
          </Link>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Trips"
            value={stats.total}
          />

          <StatCard
            title="Favorites"
            value={stats.favorites}
          />

          <StatCard
            title="Shared"
            value={stats.shared}
          />

          <StatCard
            title="Likes"
            value={stats.likes}
          />

        </div>

        <input
          className="mt-10 w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
          placeholder="Search destination..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="mt-10">

          {filteredTrips.length === 0 ? (

            <div className="rounded-3xl bg-white p-16 text-center shadow">

              <h2 className="text-2xl font-bold">
                No trips found
              </h2>

              <p className="mt-3 text-slate-500">
                Start by creating your first itinerary.
              </p>

            </div>

          ) : (

            <PortfolioGrid trips={filteredTrips} />

          )}

        </div>

      </div>

    </div>
  );
}

type StatCardProps = {
  title: string;
  value: number;
};

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}

export default Portfolio;