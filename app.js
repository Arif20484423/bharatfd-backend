const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("dotenv").config();
const dbconnect = require("./db/connectdb");
const indexRoute = require("./routes/index");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use("/", indexRoute);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
