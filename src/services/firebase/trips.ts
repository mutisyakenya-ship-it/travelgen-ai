import type {Comment as TripComment } from "../../types/comment"
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "./firestore";
import type { Trip } from "../../types/itinerary";



export async function saveTrip(
  uid: string,
  tripData: Omit<
    Trip,
    | "id"
    | "favorite"
    | "shareable"
    | "likes"
    | "likedBy"
    | "views"
    | "createdAt"
  >
) {
  return await addDoc(
    collection(db, "users", uid, "trips"),
    {
      ...tripData,
      favorite: false,
      shareable: false,
      likes: 0,
      likedBy: [],
      views: 0,
      createdAt: serverTimestamp(),
    }
  );
}
export async function getTrips(uid: string): Promise<Trip[]> {
  const q = query(
    collection(db, "users", uid, "trips"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Trip, "id">),
  }));
}
export async function getTrip(
  uid: string,
  tripId: string
): Promise<Trip | null > {
  const ref = doc(db, "users", uid, "trips", tripId);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Trip, "id">),
  };
}
export async function updateTrip(
  uid: string,
  tripId: string,
  tripData: Partial<Trip>
) {
  return updateDoc(
    doc(db, "users", uid, "trips", tripId),
    tripData
  );
}
export async function deleteTrip(
  uid: string,
  tripId: string
) {
  return deleteDoc(
    doc(db, "users", uid, "trips", tripId)
  );
}
export async function toggleFavorite(
  uid: string,
  tripId: string,
  favorite: boolean
) {
  return updateDoc(
    doc(db, "users", uid, "trips", tripId),
    {
      favorite,
    }
  );
}
export async function makeTripShareable(
  uid: string,
  tripId: string
) {
  return updateDoc(
    doc(db, "users", uid, "trips", tripId),
    {
      shareable: true,
    }
  );
}

export async function likeTrip(
  uid: string,
  tripId: string,
  userId: string
) {
  return updateDoc(
    doc(db, "users", uid, "trips", tripId),
    {
      likedBy: arrayUnion(userId),
      likes: increment(1),
    }
  );
}

export async function unlikeTrip(
  uid: string,
  tripId: string,
  userId: string
) {
  return updateDoc(
    doc(db, "users", uid, "trips", tripId),
    {
      likedBy: arrayRemove(userId),
      likes: increment(-1),
    }
  );
}

export async function incrementViews(
  tripId: string
) {
  const q = query(
    collectionGroup(db, "trips"),
    where("shareable", "==", true)
  );

  const snapshot = await getDocs(q);

  const trip = snapshot.docs.find(
    (doc) => doc.id === tripId
  );

  if (!trip) return;

  return updateDoc(trip.ref, {
    views: increment(1),
  });
}

export async function getSharedTrips(): Promise<Trip[]> {
  const q = query(
    collectionGroup(db, "trips"),
    where("shareable", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((trip) => ({
    id: trip.id,
    ...(trip.data() as Omit<Trip, "id">),
  }));
}

export async function getSharedTrip(
  tripId: string
): Promise<Trip | null> {
  const q = query(
    collectionGroup(db, "trips"),
    where("shareable", "==", true)
  );

  const snapshot = await getDocs(q);

  const trip = snapshot.docs.find(
    (doc) => doc.id === tripId
  );

  if (!trip) {
    return null;
  }

  return {
    id: trip.id,
    ...(trip.data() as Omit<Trip, "id">),
  };
}
export async function addComment(
  ownerId: string,
  tripId: string,
  authorId: string,
  authorName: string,
  text: string
) {
  return addDoc(
    collection(
      db,
      "users",
      ownerId,
      "trips",
      tripId,
      "comments"
    ),
    {
      authorId,
      authorName,
      text,
      createdAt: serverTimestamp(),
    }
  );
}
export async function removeComment(
  ownerId: string,
  tripId: string,
  commentId: string
) {
  return deleteDoc(
    doc(
      db,
      "users",
      ownerId,
      "trips",
      tripId,
      "comments",
      commentId
    )
  );
}
export function subscribeComments(
  ownerId: string,
  tripId: string,
  callback: (comments: TripComment[]) => void
) {
  const q = query(
    collection(
      db,
      "users",
      ownerId,
      "trips",
      tripId,
      "comments"
    ),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snapshot) => {
    const comments: TripComment[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<TripComment, "id">),
    }));

    callback(comments);
  });
}