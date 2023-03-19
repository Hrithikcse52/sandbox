const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT ?? 3333;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("env:", process.env.PORT);
  return res.send({ message: "hello aayush" });
});

app.get("/hotel", (req, res) => res.send({ message: "ass" }));
app.post("/hotel", (req, res) => {
  const { name } = req.body;
  console.log("req", req.body);
  return res.send(name);
});
app.put("/hotel", (req, res) => res.send({ message: "ass" }));
app.delete("/hotel", (req, res) => res.send({ message: "ass" }));

app.listen(port, () => {
  console.log("server is up and running");
});
