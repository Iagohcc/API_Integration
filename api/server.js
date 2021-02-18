const app = require("./app");
const express = require("express");
const port = 3333;

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
