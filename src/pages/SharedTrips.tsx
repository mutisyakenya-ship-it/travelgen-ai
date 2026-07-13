import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

import {
  getSharedTrip,
  incrementViews,
} from "../services/firebase/trips";

import DayCard from "../components/itinerary/DayCard";
import Timeline from "../components/itinerary/TimeLine";

import type { Trip } from "../types/itinerary";

function SharedTrip() {
  const { id } = useParams();

  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadTrip(id);
    }
  }, [id]);

  async function loadTrip(tripId: string) {
    try {
      await incrementViews(tripId);

      const data = await getSharedTrip(tripId);

      setTrip(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading itinerary...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex h-screen items-center justify-center">
        Trip not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="rounded-3xl bg-white p-10 shadow-lg">

          <h1 className="text-4xl font-bold">
            {trip.destination}
          </h1>

          <p className="mt-3 text-slate-600">
            AI Generated Travel Itinerary
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
              {trip.days} Days
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              {trip.budget}
            </span>

            <span className="rounded-full bg-purple-100 px-4 py-2 text-purple-700">
              {trip.travelStyle}
            </span>

          </div>

          <div className="mt-6 flex gap-6 text-slate-600">

            <span>{trip.likes}</span>

            <span> {trip.views}</span>

          </div>

        </div>

        <div className="mt-10 space-y-8">

          {trip.itinerary.map((day) => (

            <DayCard
              key={day.day}
              day={day.day}
            >

              <div className="space-y-6">

                <Timeline
                  activities={day.activities}
                />

                <div className="grid gap-5 md:grid-cols-2">

                  <div className="rounded-xl bg-green-50 p-5">

                    <h3 className="font-semibold">
                      Estimated Cost
                    </h3>

                    <p>KES {day.estimatedCost.toLocaleString()}</p>

                  </div>

                  <div className="rounded-xl bg-blue-50 p-5">

                    <h3 className="font-semibold">
                      Hotel
                    </h3>

                    <p>{day.hotel}</p>

                  </div>

                  <div className="rounded-xl bg-purple-50 p-5">

                    <h3 className="font-semibold">
                      Airbnb
                    </h3>

                    <p>{day.airbnb}</p>

                  </div>

                  <div className="rounded-xl bg-orange-50 p-5">

                    <h3 className="font-semibold">
                      Attractions
                    </h3>

                    <ul className="list-disc pl-5">

                      {day.attractions.map((place) => (
                        <li key={place}>{place}</li>
                      ))}

                    </ul>

                  </div>

                </div>

                <div className="rounded-xl bg-yellow-50 p-5">

                  <h3 className="font-semibold">
                    Restaurants
                  </h3>

                  <ul className="list-disc pl-5">

                    {day.restaurants.map((restaurant) => (
                      <li key={restaurant}>
                        {restaurant}
                      </li>
                    ))}

                  </ul>

                </div>

                <div className="rounded-xl bg-slate-100 p-5">

                  <h3 className="font-semibold">
                    Travel Tips
                  </h3>

                  <p>{day.tips}</p>

                </div>

              </div>

            </DayCard>

          ))}

        </div>

        <div className="mt-14 flex justify-center">

          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <QRCode
              value={window.location.href}
              size={170}
            />

            <p className="mt-4 text-center text-sm text-slate-500">
              Scan to view this itinerary
            </p>

          </div>

        </div>

        <div className="mt-16 text-center">

          <h2 className="text-3xl font-bold">
            Plan Your Own Trip
          </h2>

          <p className="mt-3 text-slate-600">
            Create personalized AI travel itineraries in minutes.
          </p>

          <Link
            to="/planner"
            className="mt-8 inline-block rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800"
          >
            Start Planning
          </Link>

        </div>

      </div>

    </div>
  );
}

export default SharedTrip;