const getKeys = require("../helpers/getKeys")
const { validationError } = require("../utils/errors")
const validator = require("validator")

module.exports = (req, res, next) => {
    let form = req.body

    const formKeys = Object.keys(form)
    const keys = getKeys()

    const stringKeys = keys.join(", ")

    if (keys.length !== formKeys.length) { throw new validationError(`Missing a key on form, check valid keys: ${stringKeys}`, 400) }


    for (let i = 0; i < formKeys.length; i++) {
        if (!(keys.includes(formKeys[i]))) { throw new validationError(`Error on form, check valid keys: ${stringKeys}`, 400) }
    }

    for (let prop in form) {
        if (!form[prop]) { throw new validationError(`Required value on prop: ${prop}`, 401) }
    }

    if (!(validator.isEmail(form.email.trim()))) { throw new validationError('Invalid Email') }

    next()
}
