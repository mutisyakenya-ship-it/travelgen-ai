type Props = {
  destination: string;
  budget: string;
  travelStyle: string;
  accommodationType: string;
  transportType: string;
  days: number;
};

function TripHero({
  destination,
  budget,
  travelStyle,
  accommodationType,
  transportType,
  days,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)]">

      <div className="p-10">

        <h1 className="text-5xl font-bold">
          {destination}
        </h1>

        <p className="mt-3 text-lg text-[var(--color-primary-light)]">
          Your personalised AI travel itinerary
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5">

            <p className="text-sm text-[var(--color-primary-light)]">
              Budget
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {budget}
            </h3>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5">

            <p className="text-sm text-[var(--color-primary-light)]">
              Duration
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {days} Days
            </h3>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5">

            <p className="text-sm text-[var(--color-primary-light)]">
              Travel Style
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {travelStyle}
            </h3>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5">

            <p className="text-sm text-[var(--color-primary-light)]">
              Accommodation
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {accommodationType}
            </h3>

          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5">

            <p className="text-sm text-[var(--color-primary-light)]">
              Transport
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {transportType}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TripHero;