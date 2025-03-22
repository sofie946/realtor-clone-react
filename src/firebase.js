// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvAPTJj6oQp4CAgVplqLeDdOPZritptTQ",
  authDomain: "realtor-clone-react-9b79b.firebaseapp.com",
  projectId: "realtor-clone-react-9b79b",
  storageBucket: "realtor-clone-react-9b79b.firebasestorage.app",
  messagingSenderId: "588250462161",
  appId: "1:588250462161:web:0755cf1cc3fce9e41312f0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()