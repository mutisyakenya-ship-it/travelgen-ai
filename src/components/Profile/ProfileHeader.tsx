import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { auth } from "../../services/firebase/firebase";

function ProfileHeader() {
  const user = auth.currentUser;

  const initials =
    user?.displayName
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-[30px] border border-emerald-200/70 bg-[linear-gradient(135deg,_rgba(16,185,129,0.95)_0%,_rgba(6,78,59,0.96)_100%)] p-8 text-white shadow-[0_24px_70px_rgba(16,185,129,0.16)] sm:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.2),_transparent_24%)]" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/20" />

      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white/40 bg-white text-3xl font-semibold text-emerald-700 shadow-lg sm:h-28 sm:w-28 sm:text-4xl">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles size={15} />
              TravelGen AI member
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {user?.displayName || "Traveler"}
            </h1>
            <p className="mt-2 text-base text-emerald-50/90">{user?.email}</p>
          </div>
        </div>

        <div className="rounded-[22px] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
          <p className="text-sm font-semibold">Profile health</p>
          <p className="mt-1 text-sm text-emerald-50/80">Your preferences are ready for the next trip.</p>
        </div>
      </div>
    </motion.section>
  );
}

export default ProfileHeader;