const express = require('express');
const router = express.Router();

const ofirebase = require('./setData');

router.post('/Ajout', async (req, res) => {

    console.log(req.body);   
    const Nom = req.body.Nom;
    ofirebase.saveData(req.body,()=>{
    })
      
});

module.exports = router;