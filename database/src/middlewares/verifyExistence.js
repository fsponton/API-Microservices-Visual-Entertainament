const store = require("../config/DDBB/index")
const { checkAndModifyName, firstUpper } = require("../helpers")
const { objectError, userError } = require("../utils/errors")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    let { model } = req.params
    const { title, name } = req.body

    model = firstUpper(model)

    if (!(title || name)) { throw new userError('Check name or title', 400) }

    const result = checkAndModifyName(req.body)
    const value = result.value
    const prop = result.propNameOrTitle

    if (prop === "title") {
        const object = await store[model].findOne({ title: value })
        if (object) { throw new objectError(`${model} with ${prop}: ${value} already exist's`, 400) }
    } else {
        const object = await store[model].findOne({ name: value })
        if (object) { throw new objectError(`${model} with ${prop}: ${value} already exist's`, 400) }
    }

    req.body[prop] = value
    req.model = model
    return next()
}
