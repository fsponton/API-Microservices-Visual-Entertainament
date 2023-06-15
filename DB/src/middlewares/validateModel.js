const { modelError } = require("../utils/errors")
const { ENTITIES } = require("../config/enviroments")

module.exports = (req, res, next) => {
    const { model } = req.params
    if ((ENTITIES.includes(model))) {
        return next()
    } else {
        throw new modelError(`Invalid route, please checkkkk`, 404)
    }
}
