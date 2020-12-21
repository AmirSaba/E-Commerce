require("firebase/auth");
const express = require("express");
const router = express.Router();
const Fb = require("./firebase");

// Méthode addUser pour créer un nouveau utilisateur
// Utilisation de la méthode createUserWithEmailAndPassword de firebase qui permet de faire une authentification par email et mot de passe

addUser = (email, password) =>
  Fb.fb.auth().createUserWithEmailAndPassword(email, password);


router.post("/Signup", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      const user = await addUser(email, password)
      var user2 = Fb.fb.auth().currentUser;
      // Envoi du message de vérification du mail 
      // Pour s'assurer que le mail entré par l'utilisateur n'est pas faux
      user2.sendEmailVerification().then(function() {
     // Email sent.
       console.log('email sent')
       Fb.fb.auth().signOut();
       
      // retourner la valeur boolénne sent :true si la création du compte et l'envoie du mail de vérification ce sont bien déroulés
       res.json({ sent : true});
   }).catch(function(error) {
     // An error happened.
       console.log(error)
   });
 
    } catch (err) {
      console.log(err.message)
      res.json({ sent : err.message});

    }
});
  
module.exports = router;
