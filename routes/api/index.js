const router = require("express").Router();
const itemRoutes = require("./item-api-routes");

// Book routes
router.use("/items", itemRoutes);

module.exports = router;
