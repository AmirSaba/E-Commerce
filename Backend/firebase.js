const firebase = require("firebase/app");
const admin = require('firebase-admin')

// Initialisation de Firebase avec notre apiKey du projet

const fb = firebase.initializeApp({
  apiKey: "AIzaSyDAiglkl0sT9YpNbz4snR9-EwagIHeGqFo",
});

exports.fb = fb;