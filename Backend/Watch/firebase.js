const firebase = require("firebase/app");

// Initialisation de Firebase avec notre apiKey du projet

const fb = firebase.initializeApp({
  apiKey: "AIzaSyDAiglkl0sT9YpNbz4snR9-EwagIHeGqFo",
  authDomain: "projetweb-c6b3e.firebaseapp.com",
  databaseURL: "https://projetweb-c6b3e-default-rtdb.firebaseio.com",
 

});

module.exports = fb;