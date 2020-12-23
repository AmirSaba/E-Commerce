const express = require('express');
const router = express.Router();

const ofirebase = require('./setData');

router.post('/Ajout', async (req, res) => {

    console.log(req.body);   
    ofirebase.saveData(req.body,()=>{
    })
      
});

module.exports = router;