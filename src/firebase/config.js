import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
    addDoc,
    updateDoc,
    query,
    orderBy,
    where,
    serverTimestamp,
    deleteDoc,
    onSnapshot,
    // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import {
    onAuthStateChanged,
    // signOut,
    getAuth,
    // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAANT57GmDzUWNDj2VMOdQlKc9VqOpsEOw",
    authDomain: "tf-solfacil.firebaseapp.com",
    projectId: "tf-solfacil",
    storageBucket: "tf-solfacil.appspot.com",
    messagingSenderId: "360666880293",
    appId: "1:360666880293:web:292abea30d874510f662cc",
    measurementId: "G-HKRT47DM7Q"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
// Inicializar authentication
export const auth = getAuth(app);
// inicializa o firestore
export const db = getFirestore(app);


export {
    onAuthStateChanged,
    //   signOut,
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
    addDoc,
    updateDoc,
    query,
    orderBy,
    where,
    serverTimestamp,
    deleteDoc,
    onSnapshot,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
};