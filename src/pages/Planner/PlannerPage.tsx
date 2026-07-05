
import PlannerForm from "../../components/Planner/PlannerForm";

function Planner() {

  return (

    <main

      className="
      min-h-screen
      bg-slate-50
      "

    >

      <div

        className="
        mx-auto
        max-w-5xl
        px-6
        py-12
        "

      >

        <div

          className="
          mb-10
          text-center
          "

        >

          <h1

            className="
            text-4xl
            font-bold
            text-slate-900
            "

          >

            Plan Your Journey

          </h1>

          <p

            className="
            mt-3
            text-lg
            text-slate-600
            "

          >

            Create AI-powered itineraries for destinations
            across Kenya and beyond.

          </p>

        </div>

        <PlannerForm />

      </div>

    </main>

  );

}

export default Planner;

