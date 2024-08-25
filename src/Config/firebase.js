
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyCdh8gtINvMuL-Y0nGrlycH-FPtsYjKI-I",
  authDomain: "fir-course-e35aa.firebaseapp.com",
  projectId: "fir-course-e35aa",
  storageBucket: "fir-course-e35aa.appspot.com",
  messagingSenderId: "1046974592086",
  appId: "1:1046974592086:web:7d9c8fb80b7bbb8abfb7f7",
  measurementId: "G-7YH7B104LC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const data_base = getFirestore (app);