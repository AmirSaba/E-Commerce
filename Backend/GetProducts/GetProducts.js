const express = require('express');
const router = express.Router();
const firebase = require('./firebase');
require('firebase/database');

// Méthode Get pour récupérer la liste des produits de la base de données


router.get('/getList', async (req, res) => {
    firebase.database().ref("Produits").on('value',(Snapshot)=>{
        console.log(Snapshot.val());
        // Retourner l'objet contenant la liste des produits enregistés dans la base de données
        res.json(Snapshot.val());
          })
      
});

module.exports = router;