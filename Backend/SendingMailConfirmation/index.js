const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

// Midelwares

app.use("/SendMail", require("./SendMail"));





const PORT = 5011;
app.listen(PORT, () => {
    console.log('App listening on port 5011!');
});