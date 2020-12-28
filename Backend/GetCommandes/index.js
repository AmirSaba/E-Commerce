const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/GetCommandes", require("./GetCommandes"));




const PORT = 5013;
app.listen(PORT, () => {
    console.log('App listening on port 5013!');
});