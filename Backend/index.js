const express = require("express");

app = express();

app.get("/", async (req, res) => {
     res.send("Hello World");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log('App listening on port 5000!');
});
