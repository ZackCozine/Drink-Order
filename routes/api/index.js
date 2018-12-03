const router = require("express").Router();
const liquorRoutes = require("./liquors");
const recipeRoutes = require("./recipes")

// Liquor routes
router.use("/liquors", liquorRoutes);


// Drink routes
router.use("/recipes", recipeRoutes);

module.exports = router;
