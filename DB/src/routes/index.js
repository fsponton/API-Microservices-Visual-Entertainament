const { Router } = require("express")
const router = Router();
const middleware = require("../middlewares")
const controller = require("../controllers")

//POST register user.
router.post("/:model/register",
    middleware.validateModel,
    middleware.verifyExistenceUser,
    controller.registerUser)

//POST login, return token on header.
router.post("/:model/login",
    middleware.validateModel,
    middleware.verifyLogin,
    controller.login)

//POST Create, polimorfic, for any entity.
router.post("/:model",
    middleware.validateModel,
    middleware.verifyUser,
    middleware.verifyExistence,
    controller.createObject)

// GET SORTED LIST, polimorfic, for any entity.  /sort?prop=release&shape=-1
router.get("/:model/sort/",
    middleware.validateModel,
    middleware.verifyUser,
    controller.orderByProp)

//GET LIST, polimorfic, for any entity.
router.get("/:model/",
    middleware.validateModel,
    middleware.verifyUser,
    controller.getList)

//GET by id, polimorfic, for any entity.
router.get("/:model/:id",
    middleware.validateModel,
    middleware.verifyUser,
    controller.getById)

module.exports = router;

