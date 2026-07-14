import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  bio: string;
  country: string;
  createdAt?: unknown;
}

export async function createUserProfile(
  profile: UserProfile
) {
  await setDoc(
    doc(db, "users", profile.uid),
    {
      ...profile,
      createdAt: serverTimestamp(),
    }
  );
}

export async function getUserProfile(uid: string) {
  const snapshot = await getDoc(
    doc(db, "users", uid)
  );

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
) {
  await updateDoc(
    doc(db, "users", uid),
    data
  );
}