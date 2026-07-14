import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Later you can connect this to EmailJS or Firebase
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Hero */}

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            We'd Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Have a question, suggestion, or feedback? Reach out and we'll
            get back to you as soon as possible.
          </p>

        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mt-6 rounded-xl bg-green-100 p-4 text-green-700">
                Thank you for contacting TravelGen AI.
                We'll get back to you soon.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full rounded-xl border border-slate-300 p-4 focus:border-green-600 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="space-y-8">

            <InfoCard
              icon="📧"
              title="Email"
              text="mutisyakenya@gmail.com"
            />

            <InfoCard
              icon="📞"
              title="Phone"
              text="+254 790177401"
            />

            <InfoCard
              icon="📍"
              title="Location"
              text="Nairobi, Kenya"
            />

            <InfoCard
              icon="🕒"
              title="Working Hours"
              text="Monday - Friday | 24/7"
            />

          </div>

        </div>

        {/* FAQ */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-8">

            <div>

              <h3 className="font-semibold text-lg">
                Is TravelGen AI free?
              </h3>

              <p className="mt-2 text-slate-600">
                Yes. You can generate and save travel itineraries for free.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Can I share my itineraries?
              </h3>

              <p className="mt-2 text-slate-600">
                Absolutely. You can share your favorite itineraries with
                friends and the TravelGen AI community.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Which AI powers TravelGen AI?
              </h3>

              <p className="mt-2 text-slate-600">
                TravelGen AI uses Google's Gemini AI to generate intelligent,
                personalized travel plans.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {text}
      </p>

    </div>
  );
}

export default Contact;