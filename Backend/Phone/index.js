const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/AjouterPhone", require("./Phone"));




const PORT = 5004;
app.listen(PORT, () => {
    console.log('App listening on port 5004!');
});