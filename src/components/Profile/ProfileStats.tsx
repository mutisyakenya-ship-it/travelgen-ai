import { useMemo } from "react";
import type { Trip } from "../../types/itinerary";

type Props = {
  trips: Trip[];
};

function ProfileStats({ trips }: Props) {
  const stats = useMemo(() => {
    const destinations = new Set(
      trips.map((trip) => trip.destination)
    );

    return {
      totalTrips: trips.length,
      destinations: destinations.size,
      favoriteTrips: trips.filter(
        (trip) => trip.favorite
      ).length,
      sharedTrips: trips.filter(
        (trip) => trip.shareable
      ).length,
      totalLikes: trips.reduce(
        (sum, trip) => sum + trip.likes,
        0
      ),
      totalViews: trips.reduce(
        (sum, trip) => sum + trip.views,
        0
      ),
    };
  }, [trips]);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-slate-800">
        Travel Statistics
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <StatCard
          title="Trips Created"
          value={stats.totalTrips}
          borderColor="border-green-600"
        />

        <StatCard
          title="Destinations"
          value={stats.destinations}
          borderColor="border-blue-600"
        />

        <StatCard
          title="Favorites"
          value={stats.favoriteTrips}
          borderColor="border-red-600"
        />

        <StatCard
          title="Shared Trips"
          value={stats.sharedTrips}
          borderColor="border-emerald-600"
        />

        <StatCard
          title="Likes"
          value={stats.totalLikes}
          borderColor="border-purple-600"
        />

        <StatCard
          title="Views"
          value={stats.totalViews}
          borderColor="border-orange-600"
        />

      </div>

    </div>
  );
}

type StatCardProps = {
  title: string;
  value: number;
  borderColor: string;
};

function StatCard({
  title,
  value,
  borderColor,
}: StatCardProps) {
  return (
    <div
      className={`rounded-2xl bg-slate-50 p-6 border-l-4 ${borderColor} shadow-sm transition hover:shadow-md`}
    >

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-bold text-slate-800">
        {value}
      </h3>

    </div>
  );
}

export default ProfileStats;