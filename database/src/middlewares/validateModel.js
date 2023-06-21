const { modelError } = require("../utils/errors")
const { ENTITIES } = require("../config/enviroments")

module.exports = (req, res, next) => {
    const { model } = req.params
    console.log(model)
    console.log(ENTITIES)
    if ((ENTITIES.includes(model))) {
        return next()
    } else {
        throw new modelError(`Invalid route, please checkkkk`, 404)
    }
}
