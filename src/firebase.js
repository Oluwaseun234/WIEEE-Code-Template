// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxPfGBe00h4esKBi43Vb9VInAlm7gkoPE",
  authDomain: "wieee-code-main.firebaseapp.com",
  projectId: "wieee-code-main",
  storageBucket: "wieee-code-main.firebasestorage.app",
  messagingSenderId: "140797504076",
  appId: "1:140797504076:web:82e6c1ea332b13bd4b22e9",
  measurementId: "G-62QF3SMCM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);