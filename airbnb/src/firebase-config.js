import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const API_KEY = "AIzaSyCY2xtt-Q4OMOHupBw5PLhKj3aLfP8k4SM"
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "airbnb-90d32.firebaseapp.com",
    projectId: "airbnb-90d32",
    storageBucket: "airbnb-90d32.appspot.com",
    messagingSenderId: "666455629121",
    appId: "1:666455629121:web:d97854120783b805cf15c0",
    measurementId: "G-FPQ3845N62"
  };
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);