// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCFtI04vCE86rowvVi8bnylGXreHLNfhw",
  authDomain: "reacttodo-33f7e.firebaseapp.com",
  projectId: "reacttodo-33f7e",
  storageBucket: "reacttodo-33f7e.appspot.com",
  messagingSenderId: "484956190457",
  appId: "1:484956190457:web:861497f7bf74ccdecd9428",
  measurementId: "G-X7QCNQ11GV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);