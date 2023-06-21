const { Router } = require("express")
const router = Router();
const controller = require("../controllers")
const middleware = require("../middlewares")

router.post("/user/register", middleware.formValidation, controller.register)

router.post("/user/login", middleware.loginValidation, controller.login)

module.exports = router;