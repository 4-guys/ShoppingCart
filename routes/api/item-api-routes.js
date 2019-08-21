const router = require("express").Router();
const itemControllers = require("../../client/controllers/itemControllers");

// Matches with "/api/books"
router.route("/api/")
    .get(itemControllers.findAll)
    .post(itemControllers.create);


router
    .route("/api/:itemName")
    .get(itemControllers.findByItemName)
    .put(itemControllers.update);

router
    .route("/api/:brandName")
    .get(itemControllers.findByBrandName)
    .put(itemControllers.update);

module.exports = router;
