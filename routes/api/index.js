const router = require("express").Router();
const itemRoutes = require("./item-api-routes");

// Book routes
router.use("/item-api-routes", itemRoutes);

module.exports = router;
