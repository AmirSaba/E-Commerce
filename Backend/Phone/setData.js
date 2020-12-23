const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    saveData : function (req, callback) {
        let NomDuPc = req.Marque;
        console.log(NomDuPc);
        
        // Enregistrement du produit dans la base de données

        firebase.database().ref("Produits/Phone/"+req.Marque+"/"+req.Nom).set({
            Ram : req.Ram,
            Stockage : req.Stockage,
            Prix : req.Prix,
            QuantiteStock : req.QuantiteStock
        })
    
    }
}