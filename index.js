const WebSocket = require("ws");
const express = require("express");
const path = require("path");

const wss = new WebSocket.Server({ port: 7071 })

setInterval(() => {
    wss.clients.forEach(client => {
        client.send(0);
    })
}, 1000)

const app = express();
app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})
app.use(express.static("assets"));

app.listen(8080, () => {
    console.log("STARTED");
});
