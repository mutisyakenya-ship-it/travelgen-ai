import { motion } from "framer-motion";
import { Compass, FolderKanban, Map, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Create itinerary",
    description: "Start a fresh AI-powered trip plan in seconds.",
    icon: Compass,
    to: "/planner",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "My trips",
    description: "Review and manage every saved itinerary.",
    icon: Map,
    to: "/trips",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    title: "Portfolio",
    description: "Showcase your favorite journeys and moments.",
    icon: FolderKanban,
    to: "/portfolio",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Profile",
    description: "Keep your travel preferences and account details up to date.",
    icon: UserRound,
    to: "/profile",
    accent: "from-amber-500 to-orange-500",
  },
];

function QuickActions() {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Navigator</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Quick actions</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Link
                to={action.to}
                className="group flex h-full flex-col rounded-[22px] border border-slate-200 bg-slate-50/70 p-5 transition-all duration-200 hover:border-slate-300 hover:bg-white"
              >
                <div className={`inline-flex w-fit rounded-2xl bg-gradient-to-br ${action.accent} p-2.5 text-white shadow-sm`}>
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{action.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{action.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-slate-700 transition-colors group-hover:text-emerald-600">
                  Open
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;