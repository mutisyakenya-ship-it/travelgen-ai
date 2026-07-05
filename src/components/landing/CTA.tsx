import { Link } from "react-router-dom";

function CTA() {
  return (

    <section className="bg-green-700 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">

          Ready For Your Next Adventure?

        </h2>

        <p className="mt-6 text-lg text-green-100">

          Build personalized itineraries,
          discover attractions and travel smarter.

        </p>

        <Link

          to="/planner"

          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-slate-100"

        >

          Start Planning

        </Link>

      </div>

    </section>

  );
}

export default CTA;