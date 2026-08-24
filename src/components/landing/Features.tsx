import {
  FaRobot,
  FaWallet,
  FaMapMarkedAlt,
  FaHotel,
  FaRoute,
  FaShareAlt
} from 'react-icons/fa'

const features = [
  {
    title: 'AI Itinerary Generation',
    description:
      'Personalized travel plans powered by Gemini AI.',
    icon: FaRobot
  },

  {
    title: 'Budget Planning',
    description:
      'Trips tailored to low, medium and premium budgets.',
    icon: FaWallet
  },

  {
    title: 'Local Discovery',
    description:
      'Discover attractions, hidden gems and authentic experiences.',
    icon: FaMapMarkedAlt
  },

  {
    title: 'Accommodation Matching',
    description:
      'Recommended hotels, lodges and Airbnbs.',
    icon: FaHotel
  },

  {
    title: 'Smart Routing',
    description:
      'Optimized travel logistics between destinations.',
    icon: FaRoute
  },

  {
    title: 'Shareable Trips',
    description:
      'Save itineraries and share them with friends.',
    icon: FaShareAlt
  }
]

function Features() {
  return (
    <section className="bg-[var(--color-surface)] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">

            Plan Smarter, Travel Better

          </h2>

          <p className="mt-4 text-[var(--color-text-secondary)]">

            Everything you need to create memorable
            journeys across Kenya.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-2 hover:shadow-[var(--shadow-card)]"
              >

                <Icon
                  size={32}
                  className="text-[var(--color-primary)]"
                />

                <h3 className="mt-5 text-xl font-semibold">

                  {feature.title}

                </h3>

                <p className="mt-3 text-[var(--color-text-secondary)]">

                  {feature.description}

                </p>

              </div>

            )

          })}

        </div>

      </div>

    </section>
  )
}

export default Features