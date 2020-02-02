const router = require("express").Router();
const authorizer = require("../../../controller/auth");

router.route("/new").post(authorizer.newUser);

module.exports = router;