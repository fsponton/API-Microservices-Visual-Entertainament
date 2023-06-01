const { Router } = require("express")
const router = Router();
const middleware = require("../middlewares")
const controller = require("../controllers")


//POST - register user 
router.post("/User/register", middleware.verifyExistence, controller.registerUser)

//POST - login return token on header
router.post("/User/login", middleware.verifyLogin, controller.login)


//POST, polimorfic, for actors, tvshows, films, directores.
router.post("/:model", middleware.verifyUser, controller.createObject)


//GET
router.get("/:model", middleware.verifyUser, controller.getList)

module.exports = router;

