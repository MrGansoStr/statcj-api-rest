const express = require("express");

const route = express.Router();

route.get('/algo', (req, res) => {
  res.status(200).send("Algo");
});

module.exports = route;