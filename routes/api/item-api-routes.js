const router = require("express").Router();
const itemControllers = require("../../controllers/itemControllers");

// Matches with "/api/books"
router.route("/")
    .get(itemControllers.findAll);


router
    .route("/:itemName")
    .get(itemControllers.findByItemName);

router
    .route("/:brandName")
    .get(itemControllers.findByBrandName);

module.exports = router;
