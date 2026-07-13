import { Link } from "react-router-dom";
import {
  Heart,
  Eye,
  ThumbsUp,
  MapPinned,
  CalendarDays,
  Wallet,
  Share2,
} from "lucide-react";

import type { Trip } from "../../types/itinerary";

type Props = {
  trip: Trip;
};

function TripCard({ trip }: Props) {
  return (
    <Link to={`/trips/${trip.id}`}>

      <article
        className="
          group
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Header */}

        <div className="bg-gradient-to-r from-green-700 to-emerald-500 p-6 text-white">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                {trip.destination}
              </h2>

              <p className="mt-2 text-green-100">
                {trip.travelStyle}
              </p>

            </div>

            {trip.favorite && (
              <Heart
                size={26}
                className="fill-red-500 text-red-500"
              />
            )}

          </div>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-100 p-4">

              <div className="flex items-center gap-2 text-green-700">

                <CalendarDays size={18} />

                <span className="text-sm font-medium">
                  Duration
                </span>

              </div>

              <p className="mt-2 text-xl font-bold">
                {trip.days} Days
              </p>

            </div>

            <div className="rounded-xl bg-slate-100 p-4">

              <div className="flex items-center gap-2 text-green-700">

                <Wallet size={18} />

                <span className="text-sm font-medium">
                  Budget
                </span>

              </div>

              <p className="mt-2 font-bold">
                {trip.budget}
              </p>

            </div>

          </div>

          {/* Accommodation */}

          <div className="rounded-xl bg-green-50 p-4">

            <div className="flex items-center gap-2 text-green-700">

              <MapPinned size={18} />

              <span className="font-medium">
                Accommodation
              </span>

            </div>

            <p className="mt-2 text-slate-700">
              {trip.accommodationType}
            </p>

          </div>

          {/* Stats */}

          <div className="flex justify-between border-t pt-5 text-slate-600">

            <div className="flex items-center gap-2">

              <ThumbsUp size={18} />

              <span>{trip.likes}</span>

            </div>

            <div className="flex items-center gap-2">

              <Eye size={18} />

              <span>{trip.views}</span>

            </div>

            {trip.shareable && (

              <div className="flex items-center gap-2 text-green-700">

                <Share2 size={18} />

                <span>Shared</span>

              </div>

            )}

          </div>

        </div>

      </article>

    </Link>
  );
}

export default TripCard;