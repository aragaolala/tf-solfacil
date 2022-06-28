// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyAANT57GmDzUWNDj2VMOdQlKc9VqOpsEOw",
  authDomain: "tf-solfacil.firebaseapp.com",
  projectId: "tf-solfacil",
  storageBucket: "tf-solfacil.appspot.com",
  messagingSenderId: "360666880293",
  appId: "1:360666880293:web:292abea30d874510f662cc",
  measurementId: "G-HKRT47DM7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = getAuth(app);

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}


export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser

}
