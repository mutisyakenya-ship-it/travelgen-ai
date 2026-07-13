
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../services/firebase/firebase";
import { getTrips } from "../services/firebase/trips";
import type { Trip } from "../types/itinerary";

function MyTrips() {

  const [

    trips,

    setTrips

  ] = useState<Trip[]>([]);

  const [

    loading,

    setLoading

  ] = useState(true);

  const [

    search,

    setSearch

  ] = useState("");

  const [

    filter,

    setFilter

  ] = useState("All");

  useEffect(() => {

    loadTrips();

  }, []);

  const filteredTrips = trips.filter((trip) => {

    const matchesSearch =

      trip.destination
        .toLowerCase()
        .includes(

          search.toLowerCase()

        );

    const matchesFilter =

      filter === "All"

      ||

      trip.travelStyle === filter;

    return (

      matchesSearch &&

      matchesFilter

    );

  });

  async function loadTrips() {

    try {

      const user = auth.currentUser;

      if (!user) {

        setLoading(false);

        return;

      }

      const data = await getTrips(

        user.uid

      );

      setTrips(

        data as Trip[]

      );

    }

    catch (error) {

      console.error(

        error

      );

    }

    finally {

      setLoading(false);

    }

  }

  if (loading) {

    return (

      <div

        className="
        flex
        justify-center
        items-center
        h-96
        "

      >

        <p

          className="
          text-slate-500
          text-lg
          "

        >

          Loading trips...

        </p>

      </div>

    );

  }

  return (

    <div

      className="
      max-w-6xl
      mx-auto
      px-6
      py-10
      "

    >

     <div
  className="
  mb-8
  flex
  items-center
  justify-between
  flex-wrap
  gap-4
  "
>
  <h1
    className="
    text-4xl
    font-bold
    text-slate-800
    "
  >
    My Trips
  </h1>

  <div className="flex gap-3">

    <Link
      to="/planner"
      className="
      rounded-xl
      bg-green-700
      px-5
      py-3
      text-white
      hover:bg-green-800
      transition
      "
    >
      Plan your Trip
    </Link>

    <Link
      to="/explore"
      className="
      rounded-xl
      bg-blue-600
      px-5
      py-3
      text-white
      hover:bg-blue-700
      transition
      "
    >
      Explore Trips
    </Link>

  </div>
</div>
      <input

        value={search}

        onChange={(e) =>

          setSearch(

            e.target.value

          )

        }

        placeholder="Search destination..."

        className="
        w-full
        rounded-xl
        border
        p-3
        mb-6
        "

      />

      <div

        className="
        flex
        gap-3
        mb-8
        flex-wrap
        "

      >

        {[

          "All",

          "Adventure",

          "Luxury",

          "Budget",

          "Family",
          "Culture"

        ].map(

          (style) => (

            <button

              key={style}

              onClick={() =>

                setFilter(

                  style

                )

              }

              className={

                filter === style

                  ?

                  "bg-green-700 text-white px-4 py-2 rounded-full"

                  :

                  "bg-slate-100 px-4 py-2 rounded-full"

              }

            >

              {style}

            </button>

          )

        )}

      </div>

      {

        filteredTrips.length === 0 && (

          <div

            className="
            rounded-3xl
            bg-white
            p-12
            shadow
            text-center
            "

          >

            <h2

              className="
              text-2xl
              font-semibold
              "

            >

              No Trips Found

            </h2>

            <p

              className="
              mt-2
              text-slate-500
              "

            >

              Try another search or filter.

            </p>

          </div>

        )

      }

      <div

        className="
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        "

      >

        {

          filteredTrips.map(

            (

              trip

            ) => (

              <Link

                key={trip.id}

                to={`/trips/${trip.id}`}

              >

                <div

                  className="
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-md
                  border
                  border-slate-100
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "

                >

                  <div

                    className="
                    flex
                    items-start
                    justify-between
                    "

                  >

                    <div>

                      <h2

                        className="
                        text-2xl
                        font-bold
                        text-slate-800
                        "

                      >

                        {trip.destination}

                      </h2>

                      <p

                        className="
                        mt-1
                        text-sm
                        text-slate-500
                        "

                      >

                        {trip.days} Days

                      </p>

                    </div>

                    <span

                      className="
                      rounded-full
                      bg-green-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-green-700
                      "

                    >

                      {trip.budget}

                    </span>

                  </div>

                  <div

                    className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    "

                  >

                    <span>

                      

                    </span>

                    <p

                      className="
                      text-slate-600
                      "

                    >

                      {trip.travelStyle}

                    </p>

                  </div>

                  <div

                    className="
                    mt-6
                    flex
                    justify-end
                    "

                  >

                    <span

                      className="
                      text-sm
                      font-semibold
                      text-green-700
                      "

                    >

                      View Trip →

                    </span>

                  </div>

                </div>

              </Link>

            )

          )

        }

      </div>

    </div>

  );

}

export default MyTrips;

