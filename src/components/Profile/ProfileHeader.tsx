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
    <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 p-10 text-white shadow-xl">

      <div className="flex flex-col items-center gap-6 md:flex-row">

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-4xl font-bold text-green-700 shadow-lg">

          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            initials
          )}

        </div>

        <div>

          <h1 className="text-4xl font-bold">
            {user?.displayName || "Traveler"}
          </h1>

          <p className="mt-2 text-lg text-green-100">
            {user?.email}
          </p>

          <span className="mt-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm">
            TravelGen AI Member
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;