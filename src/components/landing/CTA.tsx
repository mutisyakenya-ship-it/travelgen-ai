import { Link } from "react-router-dom";

function CTA() {
  return (

    <section className="bg-[var(--color-primary)] py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">

          Ready For Your Next Adventure?

        </h2>

        <p className="mt-6 text-lg text-[var(--color-primary-light)]">

          Build personalized itineraries,
          discover attractions and travel smarter.

        </p>

        <Link

          to="/planner"

          className="mt-10 inline-block rounded-xl bg-[var(--color-surface)] px-8 py-4 font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-accent-light)]"

        >

          Start Planning

        </Link>

      </div>

    </section>

  );
}

export default CTA;