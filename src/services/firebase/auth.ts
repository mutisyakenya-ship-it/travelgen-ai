import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential;
};

export const login = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const googleLogin = () => {
  return signInWithPopup(auth, provider);
};

export const resetPassword = (
  email: string
) => {
  return sendPasswordResetEmail(
    auth,
    email
  );
};

export const logout = () => {
  return signOut(auth);
};