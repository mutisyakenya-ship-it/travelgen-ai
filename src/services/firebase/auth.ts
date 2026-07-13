import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "./firebase";
import {sendPasswordResetEmail} from "firebase/auth";  
const provider = new GoogleAuthProvider();

export const register = (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
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
  return signInWithPopup(
    auth,
    provider
  );
};
export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
}

export const logout = () => {
  return signOut(auth);
};