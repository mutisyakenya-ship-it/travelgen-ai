import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">

        <Link
          to="/planner"
          className="rounded-xl bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
        >
          Create Itinerary
        </Link>

        <Link
          to="/trips"
          className="rounded-xl border px-6 py-3 hover:bg-slate-100"
        >
          My Trips
        </Link>

        <Link
          to="/portfolio"
          className="rounded-xl border px-6 py-3 hover:bg-slate-100"
        >
          Portfolio
        </Link>

        <Link
          to="/profile"
          className="rounded-xl border px-6 py-3 hover:bg-slate-100"
        >
          Profile
        </Link>

      </div>

    </div>
  );
}

export default QuickActions;