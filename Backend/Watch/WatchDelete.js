const express = require('express');
const router = express.Router();

const ofirebase = require('./setData');

router.delete('/Supprimer/:id',(req, res) => {

    let x = req.params.id;
    let y =  x.replace("POOO0O", "/");
        
    ofirebase.DeleteData(y,()=>{
    })
      
});


module.exports = router;