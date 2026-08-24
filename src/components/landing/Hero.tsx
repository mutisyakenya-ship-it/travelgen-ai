import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const safari =
  "https://res.cloudinary.com/dxemxzh3/image/upload/w_360,h_190,c_fill,q_auto,f_auto/safari";

const hotel =
  "https://res.cloudinary.com/dxemxzh3/image/upload/w_384,h_224,c_fill,q_auto,f_auto/hotel";

const food =
  "https://res.cloudinary.com/dxemxzh3/image/upload/w_320,h_160,c_fill,q_auto,f_auto/food";

const stats = [
  { value: "50+", label: "destinations" },
  { value: "1000+", label: "itineraries" },
  { value: "24/7", label: "AI planning" },
];

const highlights = [
  "AI-powered planning",
  "Luxury stays",
  "Local experiences",
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
};

function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[var(--color-background)]
      "
    >
      {/* Soft background atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-[var(--color-primary-light)]/50 blur-3xl" />

        <div className="absolute right-[-5%] top-[12%] h-80 w-80 rounded-full bg-[var(--color-accent-light)]/50 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-6 py-20 sm:px-8 lg:px-10 lg:py-24 xl:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <motion.div
              {...fadeUp}
              transition={transition}
              className="
                mb-6 inline-flex items-center gap-2 rounded-full
                border border-[var(--color-border)]
                bg-[var(--color-surface)]/80 px-4 py-2
                text-sm font-semibold text-[var(--color-primary)]
                shadow-sm backdrop-blur
              "
            >
              <Sparkles size={16} className="text-[var(--color-accent-dark)]" />
              Powered by Gemini AI
            </motion.div>

            <h1
              className="
                text-4xl font-semibold leading-[0.95]
                text-[var(--color-text)]
                sm:text-5xl lg:text-6xl lg:leading-[0.95]
              "
            >
              Plan unforgettable journeys across

              <span
                className="
                  mt-3 block
                  bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]
                  bg-clip-text text-transparent
                "
              >
                AI-powered travel planning
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              Let Gemini AI design complete travel experiences with
              personalized itineraries, attractions, accommodation, transport
              recommendations, and budget estimates in seconds.
            </p>

            {/* CTA BUTTONS */}
            <motion.div
              {...fadeUp}
              transition={transition}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/planner"
                className="
                  group inline-flex items-center justify-center
                  rounded-full bg-[var(--color-primary)]
                  px-6 py-3.5
                  text-sm font-semibold text-white
                  shadow-[0_16px_40px_rgba(15,23,42,0.16)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--color-primary-dark)]
                  focus:outline-none
                  focus:ring-2 focus:ring-[var(--color-primary-light)]
                  focus:ring-offset-2
                "
              >
                Start planning free

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-slate-200
                  bg-white/80
                  px-6 py-3.5
                  text-sm font-semibold text-slate-700
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-emerald-200
                  hover:bg-emerald-50/60
                  hover:text-emerald-700
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-200
                  focus:ring-offset-2
                "
              >
                <Compass size={18} className="mr-2 text-emerald-600" />
                Explore destinations
              </button>
            </motion.div>

            {/* HIGHLIGHTS */}
            <motion.div
              {...fadeUp}
              transition={transition}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-slate-200
                  bg-white/80
                  px-3.5 py-2
                  text-sm font-medium text-slate-700
                  shadow-sm
                "
              >
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>

                4.9/5 rating+
                ++++
              </div>

              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-slate-900/[0.04]
                    px-3.5 py-2
                    text-sm font-medium text-slate-600
                  "
                >
                  <ShieldCheck size={15} className="text-emerald-600" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              {...fadeUp}
              transition={transition}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border border-slate-200/80
                    bg-white/80
                    p-4
                    shadow-[0_14px_40px_rgba(15,23,42,0.05)]
                  "
                >
                  <p className="text-2xl font-semibold tracking-tight text-emerald-700">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <motion.div
              {...fadeUp}
              transition={transition}
              className="
                absolute inset-0
                rounded-[36px]
                bg-gradient-to-br
                from-emerald-400/15
                via-teal-300/10
                to-transparent
                blur-3xl
              "
            />

            <div
              className="
                relative rounded-[36px]
                border border-white/70
                bg-white/70
                p-3
                shadow-[0_40px_120px_rgba(15,23,42,0.14)]
                backdrop-blur-md
              "
            >
              <img
                src="/hero.jpg"
                alt="Kenya travel destination"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width={560}
                height={580}
                className="h-[520px] w-full rounded-[28px] object-cover object-center sm:h-[580px]"
              />

              {/* ITINERARY PREVIEW */}
              <div
                className="
                  absolute inset-x-6 bottom-6
                  rounded-[24px]
                  border border-white/70
                  bg-slate-950/85
                  p-4
                  text-white
                  shadow-2xl
                  backdrop-blur-md
                  sm:inset-x-8 sm:bottom-8 sm:p-5
                "
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      AI itinerary preview
                    </p>

                    <p className="mt-1 text-base font-semibold sm:text-lg">
                      3 days • Nairobi • Diani • Maasai Mara
                    </p>
                  </div>

                  <div className="rounded-full bg-emerald-400/15 p-2 text-emerald-300">
                    <Sparkles size={16} />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full bg-white/10 px-2.5 py-1">
                    Luxury stays
                  </span>

                  <span className="rounded-full bg-white/10 px-2.5 py-1">
                    Private transfers
                  </span>

                  <span className="rounded-full bg-white/10 px-2.5 py-1">
                    Local guides
                  </span>
                </div>
              </div>
            </div>

            {/* SAFARI CARD */}
            <div
              className="
                animate-float-safari
                absolute -left-2 top-8 z-20
                w-40
                rotate-[-8deg]
                rounded-[22px]
                border border-white/70
                bg-white/85
                p-2
                shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                backdrop-blur-md
                sm:-left-6 sm:top-10 sm:w-44
              "
            >
              <img
                src={safari}
                alt="Safari experience"
                className="h-24 w-full rounded-[16px] object-cover"
              />

              <div className="mt-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Maasai Mara
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Wildlife safari
                  </p>
                </div>

                <div className="rounded-full bg-emerald-100 p-1.5 text-emerald-600">
                  <MapPin size={14} />
                </div>
              </div>
            </div>

            {/* HOTEL CARD */}
            <div
              className="
                absolute -right-2 top-28 z-20
                w-44
                rotate-[8deg]
                rounded-[22px]
                border border-white/70
                bg-white/85
                p-2
                shadow-[0_22px_55px_rgba(15,23,42,0.12)]
                backdrop-blur-md
                sm:-right-4 sm:top-24 sm:w-48
              "
            >
              <img
                src={hotel}
                alt="Luxury hotel stay"
                className="h-28 w-full rounded-[16px] object-cover"
              />

              <div className="mt-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Luxury stay
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Nairobi hotels
                  </p>
                </div>

                <div className="rounded-full bg-emerald-100 p-1.5 text-emerald-600">
                  <ShieldCheck size={14} />
                </div>
              </div>
            </div>

            {/* FOOD CARD */}
            <div
              className="
                absolute
                -bottom-24
                left-[-0.5rem]
                z-20
                w-36
                rotate-[8deg]
                rounded-[20px]
                border border-white/70
                bg-white/85
                p-2
                shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                sm:-bottom-28 sm:left-[-1rem] sm:w-40
              "
            >
              <img
                src={food}
                alt="Local cuisine"
                className="h-20 w-full rounded-[14px] object-cover"
              />

              <div className="mt-2">
                <p className="text-sm font-semibold text-slate-900">
                  Local cuisine
                </p>

                <p className="text-[11px] text-slate-500">
                  Kenyan delicacies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              rounded-full
              border border-slate-200
              bg-white/80
              p-3
              text-slate-500
              shadow-sm
              backdrop-blur
            "
          >
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;