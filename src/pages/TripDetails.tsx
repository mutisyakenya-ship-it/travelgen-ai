import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { auth } from "../services/firebase/firebase";

import {
  getTrip,
  updateTrip,
  deleteTrip,
  toggleFavorite,
  likeTrip,
  unlikeTrip,
  makeTripShareable,
} from "../services/firebase/trips";

import GeneratedItinerary from "../components/planner/GeneratedItinerary";
import CommentSection from "../components/comments/CommentSection";

import FavoriteButton from "../components/Buttons/FavoriteButton";
import LikeButton from "../components/Buttons/LikeButton";
import ShareButton from "../components/Buttons/ShareButton";
import ExportButton from "../components/Buttons/ExportButton";
import DeleteButton from "../components/Buttons/DeleteButton";
import SaveButton from "../components/Buttons/SaveButton";

import type { Trip, Day } from "../types/itinerary";

function TripDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const itineraryRef = useRef<HTMLDivElement>(null);

  const [trip, setTrip] = useState<Trip | null>(null);

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);

  const [saving, setSaving] = useState(false);

  const [destination, setDestination] = useState("");

  const [budget, setBudget] = useState<"Low" | "Medium" | "High">("Low");

  const [days, setDays] = useState(0);

  const [travelStyle, setTravelStyle] = useState("");

  const [accommodationType, setAccommodationType] = useState("");

  const [transportType, setTransportType] = useState("");

  const [itinerary, setItinerary] = useState<Day[]>([]);

  useEffect(() => {
    loadTrip();
  }, []);

  async function loadTrip() {
    const user = auth.currentUser;

    if (!user || !id) {
      setLoading(false);
      return;
    }

    try {
      const data = await getTrip(user.uid, id);

      if (!data) {
        setLoading(false);
        return;
      }

      setTrip(data);

      setDestination(data.destination);
      setBudget(data.budget);
      setDays(data.days);
      setTravelStyle(data.travelStyle);
      setAccommodationType(data.accommodationType);
      setTransportType(data.transportType);
      setItinerary(data.itinerary);
    } catch (error) {
      console.error("Failed to load trip:", error);
    } finally {
      setLoading(false);
    }
  }
  async function handleSave() {
    if (!trip) return;

    const user = auth.currentUser;

    if (!user) return;

    try {
      setSaving(true);

      await updateTrip(user.uid, trip.id, {
        destination,
        budget,
        days,
        travelStyle,
        accommodationType,
        transportType,
        itinerary,
      });

      setTrip({
        ...trip,
        destination,
        budget,
        days,
        travelStyle,
        accommodationType,
        transportType,
        itinerary,
      });

      setEditing(false);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!trip) return;

    const user = auth.currentUser;

    if (!user) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmed) return;

    await deleteTrip(user.uid, trip.id);

    navigate("/portfolio");
  }

  async function handleFavorite() {
    if (!trip) return;

    const user = auth.currentUser;

    if (!user) return;

    await toggleFavorite(
      user.uid,
      trip.id,
      !trip.favorite
    );

    setTrip({
      ...trip,
      favorite: !trip.favorite,
    });
  }

  async function handleLike() {
    if (!trip) return;

    const user = auth.currentUser;

    if (!user) return;

    const liked = trip.likedBy.includes(user.uid);

    if (liked) {
      await unlikeTrip(
        user.uid,
        trip.id,
        user.uid
      );

      setTrip({
        ...trip,
        likes: trip.likes - 1,
        likedBy: trip.likedBy.filter(
          (id) => id !== user.uid
        ),
      });
    } else {
      await likeTrip(
        user.uid,
        trip.id,
        user.uid
      );

      setTrip({
        ...trip,
        likes: trip.likes + 1,
        likedBy: [...trip.likedBy, user.uid],
      });
    }
  }

  async function handleShare() {
    if (!trip) return;

    const user = auth.currentUser;

    if (!user) return;

    await makeTripShareable(user.uid, trip.id);

    setTrip({
      ...trip,
      shareable: true,
    });

    const url = `${window.location.origin}/share/${trip.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: trip.destination,
          text: `Check out my ${trip.destination} itinerary!`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);

        alert("Share link copied to clipboard.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleExport() {
    if (!itineraryRef.current) return;

    const canvas = await html2canvas(itineraryRef.current);

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 210;

    const height =
      (canvas.height * width) /
      canvas.width;

    pdf.addImage(
      image,
      "PNG",
      0,
      0,
      width,
      height
    );

    pdf.save(`${trip?.destination}.pdf`);
  }
    if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-green-700 border-t-transparent"></div>

          <p className="mt-4 text-slate-600">
            Loading your itinerary...
          </p>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="rounded-3xl bg-white p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Trip not found
          </h2>

          <p className="mt-3 text-slate-500">
            This itinerary no longer exists or you don't have permission to
            view it.
          </p>

          <Link
            to="/portfolio"
            className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800"
        >
          ← Back to Portfolio
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl">

          <div className="bg-gradient-to-r from-green-700 to-emerald-600 p-10 text-white">

            {editing ? (
              <div className="space-y-5">

                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-xl bg-white p-4 text-4xl font-bold text-slate-900"
                />

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                 <select
  value={budget}
  onChange={(e) =>
    setBudget(e.target.value as "Low" | "Medium" | "High")
  }
>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>

                  <input
                    type="number"
                    value={days}
                    onChange={(e) =>
                      setDays(Number(e.target.value))
                    }
                    placeholder="Days"
                    className="rounded-xl bg-white p-3 text-slate-900"
                  />

                  <input
                    value={travelStyle}
                    onChange={(e) =>
                      setTravelStyle(e.target.value)
                    }
                    placeholder="Travel Style"
                    className="rounded-xl bg-white p-3 text-slate-900"
                  />

                  <input
                    value={accommodationType}
                    onChange={(e) =>
                      setAccommodationType(e.target.value)
                    }
                    placeholder="Accommodation"
                    className="rounded-xl bg-white p-3 text-slate-900"
                  />

                </div>

                <input
                  value={transportType}
                  onChange={(e) =>
                    setTransportType(e.target.value)
                  }
                  placeholder="Transport"
                  className="w-full rounded-xl bg-white p-3 text-slate-900"
                />

              </div>
            ) : (
              <>
                <h1 className="text-5xl font-bold">
                  {trip.destination}
                </h1>

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full bg-white/20 px-4 py-2">
                     {trip.budget}
                  </span>

                  <span className="rounded-full bg-white/20 px-4 py-2">
                     {trip.days} Days
                  </span>

                  <span className="rounded-full bg-white/20 px-4 py-2">
                    {trip.travelStyle}
                  </span>

                  <span className="rounded-full bg-white/20 px-4 py-2">
                     {trip.accommodationType}
                  </span>

                  <span className="rounded-full bg-white/20 px-4 py-2">
                     {trip.transportType}
                  </span>

                </div>

                <div className="mt-6 flex gap-6 text-green-100">

                  <span> {trip.likes ?? 0}</span>

                  <span> {trip.views ?? 0}</span>

                  <span>
                    {trip.shareable ?? false}
                  </span>

                </div>
              </>
            )}

          </div>

          <div
            ref={itineraryRef}
            className="p-8"
          >
            <GeneratedItinerary
              destination={editing ? destination : trip.destination}
              budget={editing ? budget : trip.budget}
              travelStyle={
                editing ? travelStyle : trip.travelStyle
              }
              accommodationType={
                editing
                  ? accommodationType
                  : trip.accommodationType
              }
              transportType={
                editing
                  ? transportType
                  : trip.transportType
              }
              days={editing ? days : trip.days}
              itinerary={editing ? itinerary : trip.itinerary}
            />
          </div>
                    <div className="border-t border-slate-200 p-8">

            <div className="flex flex-wrap gap-4">

              {editing ? (
                <>
                  <SaveButton
                    onClick={handleSave}
                    loading={saving}
                  />

                  <button
                    onClick={() => {
                      if (!trip) return;

                      setDestination(trip.destination);
                      setBudget(trip.budget);
                      setDays(trip.days);
                      setTravelStyle(trip.travelStyle);
                      setAccommodationType(trip.accommodationType);
                      setTransportType(trip.transportType);
                      setItinerary(trip.itinerary);

                      setEditing(false);
                    }}
                    className="rounded-xl bg-slate-200 px-5 py-3 font-medium hover:bg-slate-300 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Edit Trip
                </button>
              )}

              <FavoriteButton
                favorite={trip.favorite ?? false}
                onClick={handleFavorite}
              />

              <LikeButton
                likes={trip.likes ?? 0}
                liked={Boolean(trip.likedBy?.includes(auth.currentUser?.uid ?? ""))}
                onClick={handleLike}
              />

              <ShareButton
                onClick={handleShare}
              />

              <ExportButton
                onClick={handleExport}
              />

              <DeleteButton
                onClick={handleDelete}
              />

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Discussion
          </h2>

          <CommentSection
            ownerId={auth.currentUser?.uid ?? ""}
            tripId={trip.id}
          />

        </div>

        <footer className="mt-12 text-center text-sm text-slate-500">

          <p>
            Built with TravelGen AI
          </p>

          <p className="mt-2">
            Plan • Save • Share • Explore
          </p>

        </footer>

      </div>

    </div>
  );
}

export default TripDetails;