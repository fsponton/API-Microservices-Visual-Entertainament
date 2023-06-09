const store = require("../config/DDBB/index")
const { checkAndModifyName } = require("../helpers")
const { objectError, userError } = require("../utils/errors")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params

    const result = checkAndModifyName(req.body)
    const value = result.value
    const prop = result.propNameOrTitle

    if (prop === "title") {
        const object = await store[model].findOne({ title: value })
        if (object) { throw new objectError(`${model} with ${prop}: ${value} already exist's`, 404) }
    } else {
        const object = await store[model].findOne({ name: value })
        if (object) { throw new objectError(`${model} with ${prop}: ${value} already exist's`, 404) }
    }

    req.body[prop] = value

    return next()
}
