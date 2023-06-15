const { getKeys } = require("../helpers")
const { clientError } = require("../utils/errors")

//Middlware - Check existence an object in model
module.exports = (req, res, next) => {
    const { model } = req.params
    const { query } = req

    const values = Object.values(query)
    const keys = getKeys(model)

    const stringKeys = keys.join(", ")

    if (!(keys.includes(values[0]))) { throw new clientError(`Error on query, props to sort: ${stringKeys}`, 400) }

    next()
}
