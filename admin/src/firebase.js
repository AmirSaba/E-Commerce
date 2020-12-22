import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDAiglkl0sT9YpNbz4snR9-EwagIHeGqFo",
    authDomain: "projetweb-c6b3e.firebaseapp.com",
    projectId: "projetweb-c6b3e",
    storageBucket: "projetweb-c6b3e.appspot.com",
    messagingSenderId: "729362718095",
    appId: "1:729362718095:web:bff199a97a1c8ca783fffa",
    measurementId: "G-23MLG1NMXR"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export var provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
