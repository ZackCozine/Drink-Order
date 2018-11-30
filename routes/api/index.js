const router = require("express").Router();
const drinkRoutes = require("./drinks");

// Drink routes
router.use("/drinks", drinkRoutes);

module.exports = router;
