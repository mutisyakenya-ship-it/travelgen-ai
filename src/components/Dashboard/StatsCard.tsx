import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  accent?: string;
};

function StatsCard({ title, value, icon, accent = "from-emerald-500 to-teal-500" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          {title}
        </h3>
        {icon && (
          <div className={`rounded-2xl bg-gradient-to-br ${accent} p-2.5 text-white shadow-sm`}>
            {icon}
          </div>
        )}
      </div>

      <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-500">Tracked in your dashboard</p>
    </motion.div>
  );
}

export default StatsCard;