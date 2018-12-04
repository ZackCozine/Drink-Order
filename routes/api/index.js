const router = require("express").Router();
const liquorRoutes = require("./liquors");
const drinkRoutes = require("./drinks");


// Liquor routes
router.use("/liquors", liquorRoutes);

// Drink routes
router.use("/drinks", drinkRoutes);


module.exports = router;
