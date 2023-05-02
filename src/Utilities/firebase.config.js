// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ-VWKLVfb8blh5yztVLDtLdRS6XPVBzY",
    authDomain: "indian-chefs-hunter.firebaseapp.com",
    projectId: "indian-chefs-hunter",
    storageBucket: "indian-chefs-hunter.appspot.com",
    messagingSenderId: "710513061943",
    appId: "1:710513061943:web:04370e8a63227cd4548fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;