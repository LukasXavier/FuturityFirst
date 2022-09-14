const express = require('express');

const app = express();

app.get("/*", (_, res) => {
    res.send("Dockerfile worked v0.3");
});

app.listen(80, () => { console.log("server started"); });