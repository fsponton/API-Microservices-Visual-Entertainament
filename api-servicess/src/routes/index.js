
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

//GET List of Bbjects
router.get("/:model",
    middleware.verifyToken,
    middleware.validateModel,
    controller.getList
)

//GET Sorted list by any prop and asc or desc    /sort?prop=release&shape=-1 (value options: -1 || - 1) 
router.get("/:model/sort",
    middleware.verifyToken,
    middleware.validateModel,
    middleware.propValidator,
    controller.getSortedList
)

//GET Object by id
router.get("/:model/:id",
    middleware.verifyToken,
    middleware.validateModel,
    controller.getById
)

module.exports = router;






