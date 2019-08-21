const router = require("express").Router();
const itemControllers = require("../../controllers/itemControllers");

// Matches with "/api/books"
router.route("/")
    .get(itemControllers.findAll)
    .post(itemControllers.create);


router
    .route("/:itemName")
    .get(itemControllers.findByItemName)
    .put(itemControllers.update);

router
    .route("/:brandName")
    .get(itemControllers.findByBrandName)
    .put(itemControllers.update);

module.exports = router;
