// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd5l00xBslzK7MptU5qRiO--8G__be8CE",
  authDomain: "formue-5c008.firebaseapp.com",
  projectId: "formue-5c008",
  storageBucket: "formue-5c008.appspot.com",
  messagingSenderId: "253539594874",
  appId: "1:253539594874:web:b410ba69a20ad9d61f41c3",
  measurementId: "G-X7YF3VRCRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
