const router = require("express").Router();
const authorizer = require("../../../controller/auth");

router.route("/new").post(authorizer.newUser);
router.route("/login").put(authorizer.login);

module.exports = router;