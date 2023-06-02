const store = require("../config/DDBB/index")
const checkAndModifyName = require("../utils/checkAndModifyName")


//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params

    const result = checkAndModifyName(req.body)

    const object = await store[model].findOne({ name: result.name })

    if (object) return res.status(404).send({ status: "error", msg: `${model} with ${result.nameOrTitle}: ${result.name} already exist's` });

    req.body.name = result.name

    next()
}
