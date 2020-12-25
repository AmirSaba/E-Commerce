const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    // Ajouter un phone dans la base de données
    saveData : function (req, callback) {
        let NomDuPc = req.Marque;
        console.log(NomDuPc);
        
        // Enregistrement du produit dans la base de données

        firebase.database().ref("Produits/Phone/"+req.Marque+"/"+req.Nom).set({
            Type : "Phone",
            Ram : req.Ram,
            Stockage : req.Stockage,
            Prix : req.Prix,
            QuantiteStock : req.QuantiteStock
        })
    
    },

    // Supprimer un Phone dans la base de données   
    DeleteData : function (req, callback) {
       
        //req est la marque et le nom du Phone a supprimer
        firebase.database().ref("Produits/Phone/"+req).set(null);
    
    }
}