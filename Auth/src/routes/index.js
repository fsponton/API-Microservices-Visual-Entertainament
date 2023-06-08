const { Router } = require("express")
const router = Router();
const controller = require("../controllers")
const middleware = require("../middlewares")

router.post("/User/register", middleware.formValidation, controller.register)

router.post("/User/login", middleware.formValidation, controller.login)

module.exports = router;