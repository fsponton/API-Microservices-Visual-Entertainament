const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { model } = req.params

    console.log(req)
    if (!["Actor", "Movie", "TvShow", "Director", "User"].includes(model)) {
        throw new ClientError(`No coincide la route, no contiene Character || Film || Planet`, 404)
    }
    next()
}