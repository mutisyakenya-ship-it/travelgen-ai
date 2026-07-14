import { motion } from "framer-motion";
import { Compass, Heart, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import type { Trip } from "../../types/itinerary";

type Props = {
  trips: Trip[];
};

function ProfileStats({ trips }: Props) {
  const stats = useMemo(() => {
    const destinations = new Set(trips.map((trip) => trip.destination));

    return {
      totalTrips: trips.length,
      destinations: destinations.size,
      favoriteTrips: trips.filter((trip) => trip.favorite).length,
      sharedTrips: trips.filter((trip) => trip.shareable).length,
      totalLikes: trips.reduce((sum, trip) => sum + trip.likes, 0),
      totalViews: trips.reduce((sum, trip) => sum + trip.views, 0),
    };
  }, [trips]);

  const cards = [
    { title: "Trips created", value: stats.totalTrips, icon: Compass, accent: "from-emerald-500 to-teal-500" },
    { title: "Destinations", value: stats.destinations, icon: MapPin, accent: "from-sky-500 to-indigo-500" },
    { title: "Favorites", value: stats.favoriteTrips, icon: Heart, accent: "from-rose-500 to-orange-500" },
    { title: "Shared trips", value: stats.sharedTrips, icon: Sparkles, accent: "from-violet-500 to-fuchsia-500" },
    { title: "Likes", value: stats.totalLikes, icon: TrendingUp, accent: "from-amber-500 to-orange-500" },
    { title: "Views", value: stats.totalViews, icon: TrendingUp, accent: "from-slate-700 to-slate-900" },
  ];

  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Insights</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Travel statistics</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-[22px] border border-slate-200/80 bg-slate-50/70 p-5"
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${card.accent} p-2.5 text-white shadow-sm`}>
                <Icon size={18} />
              </div>
              <p className="mt-4 text-sm font-medium text-slate-500">{card.title}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{card.value}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProfileStats;