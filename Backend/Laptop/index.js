const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/AjouterLaptop", require("./Laptop"));
app.use("/SupprimerLaptop", require("./LaptopDelete"));





const PORT = 5002;
app.listen(PORT, () => {
    console.log('App listening on port 5002!');
});