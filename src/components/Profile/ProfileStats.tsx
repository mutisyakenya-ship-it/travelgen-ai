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
    { title: "Trips created", value: stats.totalTrips, icon: Compass, accent: "from-emerald-500 to-teal-500", iconBg: "bg-emerald-50 text-emerald-600", glow: "shadow-emerald-100" },
    { title: "Destinations", value: stats.destinations, icon: MapPin, accent: "from-sky-500 to-blue-600", iconBg: "bg-sky-50 text-sky-600", glow: "shadow-sky-100" },
    { title: "Favorites", value: stats.favoriteTrips, icon: Heart, accent: "from-rose-500 to-pink-600", iconBg: "bg-rose-50 text-rose-600", glow: "shadow-rose-100" },
    { title: "Shared trips", value: stats.sharedTrips, icon: Sparkles, accent: "from-violet-500 to-purple-600", iconBg: "bg-violet-50 text-violet-600", glow: "shadow-violet-100" },
    { title: "Likes", value: stats.totalLikes, icon: TrendingUp, accent: "from-amber-500 to-orange-500", iconBg: "bg-amber-50 text-amber-600", glow: "shadow-amber-100" },
    { title: "Views", value: stats.totalViews, icon: TrendingUp, accent: "from-indigo-500 to-violet-600", iconBg: "bg-indigo-50 text-indigo-600", glow: "shadow-indigo-100" },
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
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)" }}
              className="rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`inline-flex rounded-2xl ${card.iconBg} p-3 shadow-sm`}>
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${card.accent} opacity-15 blur-xl`} />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{card.title}</p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[2.2rem]">{card.value}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProfileStats;