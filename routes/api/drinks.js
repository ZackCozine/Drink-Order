const router = require("express").Router();
const drinkController = require("../../controllers/drinkController");

// Matches with "/api/books"
router
  .route("/")
  .get(drinkController.findAll)
  .post(drinkController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(drinkController.findById)
  .put(drinkController.update)
  .delete(drinkController.remove);

  // Matches with "/api/drinks/:userId"
router.route("/byuser/:userId")
.get(drinkController.findByUser);

module.exports = router;
