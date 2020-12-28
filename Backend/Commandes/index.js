const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/AjouterCommande", require("./Commande"));






const PORT = 5010;
app.listen(PORT, () => {
    console.log('App listening on port 5010!');
});