const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { model } = req.params

    if (!["Actor", "Movie", "TvShow", "Director", "User"].includes(model)) {
        throw new ClientError(`No coincide la route, no contiene Actor || Movie || tvShow || Director || User`, 404)
    }
    next()
}