const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 3333;
app.use(cors());

app.get("/", (req, res) => {
  console.log("env:", process.env.PORT);
  return res.send({ message: "hello aayush" });
});

app.listen(port, () => {
  console.log("server is up and running");
});
