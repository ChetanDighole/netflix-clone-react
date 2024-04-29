// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaRwVPoj4EblEM30N2ePH17SnJOg5dRqQ",
    authDomain: "netflix-clone-327dc.firebaseapp.com",
    projectId: "netflix-clone-327dc",
    storageBucket: "netflix-clone-327dc.appspot.com",
    messagingSenderId: "194896254660",
    appId: "1:194896254660:web:77dc7717d720bed42bdb91",
    measurementId: "G-TS3SR7JCFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
