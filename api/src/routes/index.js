const express = require("express");
const router = express.Router();
const opportunities = require("../controllers/createOrderPipedriveToBling");

router.get("/", (req, res) => {
  res.send("teste");
});

router.post("/deals", opportunities.createOpportunities);
router.get("/deals", opportunities.listOpportunities);
module.exports = router;
