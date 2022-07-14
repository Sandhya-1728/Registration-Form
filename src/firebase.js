// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7wBbyRlzMHavoD_nwk1LXyot9Y8qfZ_s",
    authDomain: "myregistration-form.firebaseapp.com",
    databaseURL: "https://myregistration-form-default-rtdb.firebaseio.com",
    projectId: "myregistration-form",
    storageBucket: "myregistration-form.appspot.com",
    messagingSenderId: "764610634557",
    appId: "1:764610634557:web:c3cf45656153dd9d9e9b54",
    measurementId: "G-LPLC4WMQX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);