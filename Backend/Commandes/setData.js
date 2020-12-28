const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    // Ajouter une commande
    saveData : function (req, callback) {

        firebase.database().ref("Commandes").push({
            ProduitsCommander : req.ProduitCommander,
            QuantiteCommander : req.QuantiteCommander,
            MarqueDesProduits : req.MarqueDesProduits,
            Email: req.Email,

        })
    
    }
}

