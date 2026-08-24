import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  accent?: string;
};

function StatsCard({ title, value, icon, accent = "bg-[var(--color-primary)]" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
          {title}
        </h3>
        {icon && (
          <div className={`rounded-2xl ${accent} p-2.5 text-white shadow-[var(--shadow-soft)]`}>
            {icon}
          </div>
        )}
      </div>

      <p className="mt-5 break-words text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">Tracked in your dashboard</p>
    </motion.div>
  );
}

export default StatsCard;