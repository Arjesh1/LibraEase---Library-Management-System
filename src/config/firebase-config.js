// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCtj1v3Gxzcvp2YQ2FLgl-PbKpi75B22c",
  authDomain: "cooding-bootcamp.firebaseapp.com",
  projectId: "cooding-bootcamp",
  storageBucket: "cooding-bootcamp.appspot.com",
  messagingSenderId: "935515538931",
  appId: "1:935515538931:web:c4efd36f513c2de3863e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)