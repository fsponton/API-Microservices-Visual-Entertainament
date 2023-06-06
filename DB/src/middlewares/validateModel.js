const { ClientError } = require("../utils/errors")
const { ENTITIES } = require("../config/enviroments")

module.exports = (req, res, next) => {
    const { model } = req.params
    if (!(ENTITIES.includes(model))) {
        throw new ClientError(`Invalid route, please check`, 404)
    }
    next()
}