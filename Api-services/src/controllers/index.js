const { catchedAsync } = require("../utils")

module.exports = {
    validateMovie: require("../helpers/checkNulls"),
    getList: catchedAsync(require("./getList")),
    createObject: catchedAsync(require("./createObject"))
}