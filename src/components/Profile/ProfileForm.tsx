import { useState } from "react";
import { updateProfile } from "firebase/auth";
import {
  doc,
  setDoc,
} from "firebase/firestore";

import { auth } from "../../services/firebase/firebase";
import { db } from "../../services/firebase/firebase";

function ProfileForm() {
  const user = auth.currentUser;

  const [name, setName] = useState(
    user?.displayName || ""
  );

  const [country, setCountry] = useState("");

  const [bio, setBio] = useState("");

  const [favoriteStyle, setFavoriteStyle] =
    useState("Adventure");

  const [saving, setSaving] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSave() {
    if (!user) return;

    try {
      setSaving(true);
      setSuccess("");
      setError("");

      // Update Firebase Authentication
      await updateProfile(user, {
        displayName: name,
      });

      // Save extra profile data
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

      setSuccess(
        "Profile updated successfully."
      );
    } catch (err) {
      console.error(err);
      setError(
        "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-bold">
        Personal Information
      </h2>

      <div className="mt-8 space-y-6">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Country
          </label>

          <input
            value={country}
            onChange={(e) =>
              setCountry(e.target.value)
            }
            className="w-full rounded-xl border p-3"
            placeholder="Kenya"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Bio
          </label>

          <textarea
            rows={4}
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
            className="w-full rounded-xl border p-3"
            placeholder="Tell other travelers about yourself..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Favorite Travel Style
          </label>

          <select
            value={favoriteStyle}
            onChange={(e) =>
              setFavoriteStyle(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Family</option>
            <option>Romantic</option>
            <option>Backpacking</option>
            <option>Business</option>
          </select>
        </div>

        {success && (
          <div className="rounded-xl bg-green-100 p-4 text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>

    </div>
  );
}

export default ProfileForm;