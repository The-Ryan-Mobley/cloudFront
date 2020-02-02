const router = require("express").Router();
const suserRoutes = require("./userRoutes");


router.use("/users", scrapeRoutes);


module.exports = router;