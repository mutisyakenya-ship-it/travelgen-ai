type Props = {
  destination: string;
  budget: string;
  travelStyle: string;
  accommodation: string;
  transport: string;
  days: number;
};

function TripHero({
  destination,
  budget,
  travelStyle,
  accommodation,
  transport,
  days,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 text-white shadow-xl">

      <div className="p-10">

        <h1 className="text-5xl font-bold">
          {destination}
        </h1>

        <p className="mt-3 text-green-100 text-lg">
          Your personalised AI travel itinerary
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="text-sm text-green-100">
              Budget
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {budget}
            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="text-sm text-green-100">
              Duration
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {days} Days
            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="text-sm text-green-100">
              Travel Style
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {travelStyle}
            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="text-sm text-green-100">
              Accommodation
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {accommodation}
            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

            <p className="text-sm text-green-100">
              Transport
            </p>

            <h3 className="mt-2 text-xl font-bold">
               {transport}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TripHero;