const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send({ message: "hello aayush" });
});

app.listen(3333, () => {
  console.log("server is up and running");
});
