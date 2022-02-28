// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbele6jAY4J84tQqABU2TUHbGvTf_vj4Q",
    authDomain: "coffeeappkw-dac6f.firebaseapp.com",
    projectId: "coffeeappkw-dac6f",
    storageBucket: "coffeeappkw-dac6f.appspot.com",
    messagingSenderId: "812985603697",
    appId: "1:812985603697:web:6b8f7c06a7ba5f6f06add0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unSub;
  }, []);
  return currentUser;
}


