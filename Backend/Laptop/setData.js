const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    saveData : function (req, callback) {
        let NomDuPc = req.Marque;
        console.log(NomDuPc);

        firebase.database().ref("Produits/Laptop/"+req.Marque+"/"+req.Nom).set({
            Type : "Laptop",
            Generation : req.GenerationDuPc,
            Ram : req.Ram,
            Stockage : req.Stockage,
            Prix : req.Prix,
            QuantiteStock : req.QuantiteStock
        })
    
    }
}