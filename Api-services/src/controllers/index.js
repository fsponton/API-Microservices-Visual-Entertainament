const { catchedAsync } = require("../utils")

module.exports = {
    validateMovie: require("../../../Api-services/src/controllers/validateMovie"),
    getList: catchedAsync(require("./getList"))
}