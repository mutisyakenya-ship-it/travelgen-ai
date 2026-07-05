import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    location: "Nairobi",
    quote:
      "TravelGen AI planned our Naivasha weekend in minutes. Everything was organized perfectly.",
    rating: 5
  },

  {
    id: 2,
    name: "Sarah Achieng",
    location: "Mombasa",
    quote:
      "I found accommodation recommendations and hidden gems I would never have discovered myself.",
    rating: 5
  },

  {
    id: 3,
    name: "Brian Kiptoo",
    location: "Eldoret",
    quote:
      "Sharing our itinerary with friends made group planning effortless.",
    rating: 5
  }
];

function Testimonials() {
  return (

    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">

            What Travelers Say

          </h2>

          <p className="mt-4 text-slate-600">

            Experiences from people exploring Kenya with TravelGen AI.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <motion.div

              key={testimonial.id}

              whileHover={{ y: -8 }}

              className="rounded-3xl bg-white p-8 shadow-md"

            >

              <div className="mb-4 text-yellow-500">

                {"★".repeat(testimonial.rating)}

              </div>

              <p className="text-slate-600 italic">

                "{testimonial.quote}"

              </p>

              <div className="mt-6">

                <h3 className="font-semibold">

                  {testimonial.name}

                </h3>

                <p className="text-sm text-slate-500">

                  {testimonial.location}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;