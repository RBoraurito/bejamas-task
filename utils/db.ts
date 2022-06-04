import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Rd2vouhyOyEv0K0GeYD0D9PZmx-bMgQ",
  authDomain: "bejamastask.firebaseapp.com",
  projectId: "bejamastask",
  storageBucket: "bejamastask.appspot.com",
  messagingSenderId: "436787876704",
  appId: "1:436787876704:web:e629ce327700eb451b0405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);