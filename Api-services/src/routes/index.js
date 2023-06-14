
const { Router } = require("express")
const router = Router();
const controller = require("../controllers")
const middleware = require("../middlewares")

//POST create Object
router.post("/:model/create",
    middleware.verifyToken,
    middleware.validateModel,
    middleware.formValidator,
    controller.createObject
)

//GET List of objects
router.get("/:model",
    middleware.verifyToken,
    middleware.validateModel,
    controller.getList
)

//GET SORTED LIST BY PROP and asc/desc (-1 - 1)    /sort?prop=release&shape=-1   
router.get("/:model/sort",
    middleware.verifyToken,
    middleware.validateModel
)

//GET Object by id
router.get("/:model/:id",
    middleware.verifyToken,
    middleware.validateModel
)



module.exports = router;






