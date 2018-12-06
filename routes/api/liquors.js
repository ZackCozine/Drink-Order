const router = require("express").Router();
const liquorController = require("../../controllers/liquorController");

// Matches with "/api/liquor"
router.route("/")
  // .get(liquorController.findAll)
  .post(liquorController.create);

// Matches with "/api/liquor/:id"
router.route("/:id")
  .get(liquorController.findById)
  .put(liquorController.update)
  .delete(liquorController.remove);

// Matches with "/api/liquor/:userId"
router.route("/:userId")
  .get(liquorController.findByUser);

module.exports = router;


