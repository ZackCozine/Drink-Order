const router = require("express").Router();
const liquorRoutes = require("./liquors");

// Liquor routes
router.use("/liquors", liquorRoutes);

module.exports = router;
