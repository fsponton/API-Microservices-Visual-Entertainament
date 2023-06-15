const { getKeys, checkNulls } = require("../helpers")
const { clientError } = require("../utils/errors")

//Middlware - Check existence an object in model
module.exports = (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const keys = getKeys(model)
    const formkeys = Object.keys(form)

    const stringKeys = keys.join(", ")

    if (keys.length !== formkeys.length) { throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400) }

    for (let i = 0; i < formkeys.length; i++) {
        if (!(keys.includes(formkeys[i]))) { throw new clientError(`Error keys on form, check required keys: ${stringKeys}`, 400) }
    }

    const checkObjectToCreate = {
        Actor: checkNulls(form),
        Director: checkNulls(form),
        Movie: checkNulls(form),
        TvShow: checkNulls(form)
    }

    checkObjectToCreate[model]

    req.form
    req.token
    next()
}
