import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";

type Props = {
  userName?: string;
};

function WelcomeBanner({ userName = "Traveler" }: Props) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[28px] border border-[var(--color-primary)]/20 bg-[var(--color-primary)] p-8 text-white shadow-[var(--shadow-card)] sm:p-10"
    >
      <div className="absolute inset-0 bg-[var(--color-primary-dark)]/25" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/20" />
      <div className="absolute bottom-[-2rem] left-[-1rem] h-36 w-36 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-sm font-medium backdrop-blur">
            <Sparkles size={15} />
            AI concierge ready
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Welcome back, {userName}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-light)] sm:text-[0.7rem]">
            {formattedDate}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-primary-light)] sm:text-lg">
            “The best journeys are the ones that feel effortless, personal, and beautifully planned.”
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
          <div className="rounded-xl bg-white/15 p-2">
            <Compass size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold">Next trip, elevated</p>
            <p className="text-xs text-[var(--color-primary-light)]">Plan smarter with Gemini AI</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WelcomeBanner;