import { motion } from "framer-motion";
import { CalendarDays, Heart, MapPin, Sparkles, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import type { Trip } from "../../types/itinerary";

type Props = {
  trips: Trip[];
};

function RecentTrips({ trips }: Props) {
  return (
    <section className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">Library</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-text)]">Recent trips</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-light)] px-3 py-2 text-sm font-medium text-[var(--color-primary)]">
          <Sparkles size={15} />
          Curated by AI
        </div>
      </div>

      {trips.length === 0 ? (
        <div className="mt-8 rounded-[24px] border border-dashed border-[var(--color-border)] bg-[var(--color-surface-soft)] p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
            <MapPin size={24} />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">Your next adventure is waiting</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
            Start planning a trip and it will appear here with the details, styling, and budget ready to review.
          </p>
          <Link
            to="/planner"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Create trip
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-4">
          {trips.slice(0, 5).map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <Link to={`/trips/${trip.id}`} className="group block rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 shadow-[var(--shadow-soft)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-surface)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">{trip.destination}</h3>
                      <span className="rounded-full bg-[var(--color-primary-light)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                        {trip.travelStyle}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {trip.days} days
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Wallet size={14} />
                        {trip.budget}
                      </span>
                      {trip.favorite && (
                        <span className="inline-flex items-center gap-1.5 text-[var(--color-accent-dark)]">
                          <Heart size={14} fill="currentColor" />
                          Favorite
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-primary)] shadow-[var(--shadow-soft)] sm:self-auto">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    Open itinerary
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentTrips;
