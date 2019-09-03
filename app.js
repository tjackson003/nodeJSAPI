// VARIABLES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();

app.get("/api/all", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send({msg: "Hello, World!"});
});

// RUN THE SERVER
app.listen(3000, (e) => {
    if(e) throw e;

    console.log("Server has started on port 3000...");
});