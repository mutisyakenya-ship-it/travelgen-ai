import { Link } from "react-router-dom";

function QuickActions() {

  return (

    <div
      className="rounded-3xl bg-white p-6 shadow"
    >

      <h2
        className="text-xl font-semibold"
      >

        Quick Actions

      </h2>

      <div
        className="mt-6 flex gap-4"
      >

        <Link

          to="/planner"

          className="
          rounded-xl
          bg-green-700
          px-6
          py-3
          text-white
          font-medium
          "

        >

          Create Itinerary

        </Link>
        <Link

to="/trips"

>

My Trips

</Link>

        <button

          className="
          rounded-xl
          border
          px-6
          py-3
          "

        >

          Portfolio

        </button>

      </div>

    </div>

  );

}

export default QuickActions;