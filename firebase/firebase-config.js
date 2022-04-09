import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_I9z80mBnn4zT6aHYeq6s14ST06iQ1mI",
  authDomain: "massageapp-7ae7a.firebaseapp.com",
  projectId: "massageapp-7ae7a",
  storageBucket: "massageapp-7ae7a.appspot.com",
  messagingSenderId: "11970039290",
  appId: "1:11970039290:web:c29816bfde0d6c8809a843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);