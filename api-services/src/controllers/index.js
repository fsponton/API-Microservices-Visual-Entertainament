const { catchedAsync } = require("../utils")

module.exports = {
    getList: catchedAsync(require("./getList")),
    createObject: catchedAsync(require("./createObject")),
    getById: catchedAsync(require("./getById")),
    getSortedList: catchedAsync(require("./getSortedList"))
}