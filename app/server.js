const express = require('express');

const app = express();

app.get("/*", (_, res) => {
    res.send("Dockerfile worked");
});

app.listen(80, () => { console.log("server started"); });