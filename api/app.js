const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index");
require("./src/database/connection");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

module.exports = app;
