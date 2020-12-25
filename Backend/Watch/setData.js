const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    saveData : function (req, callback) {
        

        firebase.database().ref("Produits/Watch/"+req.Marque+"/"+req.Nom).set({
            Type : "Watch",
            TypeWatch : req.Type,
            Bracelet : req.Bracelet,
            Prix : req.Prix,
            QuantiteStock : req.QuantiteStock
        })
    
    },
    DeleteData : function (req, callback) {
       
        //req est la marque et le nom de la watch a supprimer
        firebase.database().ref("Produits/Watch/"+req).set(null);
    
    }
}