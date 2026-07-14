import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Hero */}
        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            About TravelGen AI
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Smarter Travel Starts Here
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            TravelGen AI is an intelligent itinerary planner that helps
            travelers build personalized travel experiences in seconds using
            Artificial Intelligence. Whether you're planning a weekend escape
            or a long vacation, our platform generates complete travel plans
            tailored to your budget and preferences.
          </p>

        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <FeatureCard
            icon="🤖"
            title="AI Powered"
            text="Generate complete itineraries with Gemini AI based on your destination, budget and travel style."
          />

          <FeatureCard
            icon="🌍"
            title="Explore"
            text="Discover attractions, restaurants, hotels and hidden gems for every destination."
          />

          <FeatureCard
            icon="📁"
            title="Portfolio"
            text="Save, organize and revisit every trip you've planned in your personal travel portfolio."
          />

        </div>

        {/* Mission */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow">

          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe planning a trip should be exciting—not stressful.
            TravelGen AI combines modern AI technology with beautiful design
            to help travelers spend less time planning and more time exploring.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-green-700 px-10 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>

          <p className="mt-4 text-lg">
            Let AI build your perfect travel itinerary today.
          </p>

          <Link
            to="/planner"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-green-700"
          >
            Start Planning
          </Link>

        </div>

      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

export default About;