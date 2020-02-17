const router = require("express").Router();
const inventoryManager = require("../../../controller/inventoryManager");

router.route("/deals").get(inventoryManager.getSpecials);
router.route("/search/?=:query").get(inventoryManager.searchQuery);
router.route("/suggest/:inputValue").get(inventoryManager.suggestedResult);
module.exports = router;