const { validationError } = require("../utils/errors")
const validator = require("validator")

module.exports = (req, res, next) => {
    let form = req.body

    for (let prop in form) {
        if (!form[prop]) { throw new validationError(`Required value on prop: ${prop}`, 401) }
    }

    if (!(validator.isEmail(form.email.trim()))) { throw new validationError('Invalid Email') }

    next()
}
