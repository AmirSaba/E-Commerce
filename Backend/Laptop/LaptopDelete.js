const express = require('express');
const router = express.Router();

const ofirebase = require('./setData');

// le route pour supprimer un laptop
// utilisation de la methode delete

router.delete('/Supprimer/:id',(req, res) => {

    let x = req.params.id;
    let y =  x.replace("POOO0O", "/");
        
    ofirebase.DeleteData(y,()=>{
    })
      
});


module.exports = router;