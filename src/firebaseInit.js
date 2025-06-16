// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgIP_7jTvUWo3K8pyN7zvJQ0h96WkL7SM",
  authDomain: "blogging-app-2add2.firebaseapp.com",
  projectId: "blogging-app-2add2",
  storageBucket: "blogging-app-2add2.firebasestorage.app",
  messagingSenderId: "337436950830",
  appId: "1:337436950830:web:62b129204371526d0c3abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);