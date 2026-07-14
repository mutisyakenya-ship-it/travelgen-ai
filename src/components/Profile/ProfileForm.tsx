import { motion } from "framer-motion";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth } from "../../services/firebase/firebase";
import { db } from "../../services/firebase/firebase";

function ProfileForm() {
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [favoriteStyle, setFavoriteStyle] = useState("Adventure");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSave() {
    if (!user) return;

    try {
      setSaving(true);
      setSuccess("");
      setError("");

      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName: name,
          country,
          bio,
          favoriteStyle,
          email: user.email,
        },
        { merge: true }
      );

      setSuccess("Profile updated successfully.");
    } catch (err) {
      console.error(err);
      setError("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Account</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Personal information</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Kenya"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Bio</label>
          <textarea
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Tell other travelers about yourself..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Favorite travel style</label>
          <select
            value={favoriteStyle}
            onChange={(e) => setFavoriteStyle(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
          >
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Family</option>
            <option>Romantic</option>
            <option>Backpacking</option>
            <option>Business</option>
          </select>
        </div>

        {success && <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</div>}
        {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </motion.section>
  );
}

export default ProfileForm;