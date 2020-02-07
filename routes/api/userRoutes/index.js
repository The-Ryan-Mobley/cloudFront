const router = require("express").Router();
const authorizer = require("../../../controller/auth");

router.route("/new").post(authorizer.newUser);
router.route("/Login").post(authorizer.login);

module.exports = router;