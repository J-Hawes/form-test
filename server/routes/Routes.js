const express = require("express");

const router = express.Router();

//required files
const apiController = require("../api/Controllers");

//Calls to controllers
router.get("/property-report", apiController.getPropertyReport);

router.get("/movers", apiController.getMovers);

module.exports = router;
