const { Router } = require("express")
const router = Router();
const controller = require("../controllers")
const middleware = require("../middlewares")



router.post("/User/register", middleware.formValidation, controller.register)



module.exports = router;