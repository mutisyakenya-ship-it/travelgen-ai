import { motion } from "framer-motion";
import { LogOut, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../services/firebase/firebase";
import { logout } from "../../services/firebase/auth";

function AccountActions() {
  const navigate = useNavigate();

  async function handleResetPassword() {
    const user = auth.currentUser;

    if (!user?.email) return;

    try {
      await sendPasswordResetEmail(auth, user.email);
      alert("Password reset email sent.");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Security</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Account actions</h2>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleResetPassword}
          className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
        >
          <ShieldCheck size={16} className="mr-2" />
          Reset password
        </button>

        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </button>
      </div>
    </motion.section>
  );
}

export default AccountActions;