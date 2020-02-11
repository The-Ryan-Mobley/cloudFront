const router = require("express").Router();
const inventoryManager = require("../../../controller/inventoryManager");

router.route("/deals").get(inventoryManager.getSpecials);
module.exports = router;