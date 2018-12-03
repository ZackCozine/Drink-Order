const router = require("express").Router();
const drinkRoutes = require("./drinks");
const recipeRoutes = require("./recipes")

// Drink routes
router.use("/drinks", drinkRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
