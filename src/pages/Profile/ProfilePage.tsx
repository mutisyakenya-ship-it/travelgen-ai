import { useEffect, useState } from "react";

import { auth } from "../../services/firebase/firebase";
import { getTrips } from "../../services/firebase/trips";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileStats from "../../components/Profile/ProfileStats";
import AccountActions from "../../components/Profile/AccountActions";

import type { Trip } from "../../types/itinerary";

function ProfilePage() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await getTrips(user.uid);
      setTrips(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">

        <ProfileHeader />

        <ProfileStats trips={trips} />

        <ProfileForm />

        <AccountActions />

      </div>

    </div>
  );
}

export default ProfilePage;