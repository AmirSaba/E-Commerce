const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/AjouterWatch", require("./Watch"));
app.use("/SupprimerWatch", require("./WatchDelete"));





const PORT = 5012;
app.listen(PORT, () => {
    console.log('App listening on port 5012!');
});