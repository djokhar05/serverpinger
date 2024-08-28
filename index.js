const express = require("express");
const app = express();
const setupPingers = require("./pingers");
setupPingers();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Server Pinger Server 🎉🥳");
});

const port = process.env.PORT || 5500;
const server = app.listen(port, () => {
  let serverAddress = server.address().address;
  let host = serverAddress === "::" ? "localhost" : serverAddress;
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
