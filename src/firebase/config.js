// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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