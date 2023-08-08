import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGR-BeN6I3XDRvqP_9mcLNfe64KSX0TYY",
  authDomain: "ecommerce-website-2ff1d.firebaseapp.com",
  projectId: "ecommerce-website-2ff1d",
  storageBucket: "ecommerce-website-2ff1d.appspot.com",
  messagingSenderId: "177632243438",
  appId: "1:177632243438:web:56467e9735d8f48f9dcdff",
  measurementId: "G-N7D3SYV99T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
