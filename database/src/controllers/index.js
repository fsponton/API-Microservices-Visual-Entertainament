const { catchedAsync } = require("../utils")

module.exports = {
    getList: catchedAsync(require("./getList")),
    getById: catchedAsync(require("./getById")),
    createObject: catchedAsync(require("./createObject")),
    login: catchedAsync(require("./login")),
    registerUser: catchedAsync(require("./registerUser")),
    orderByProp: catchedAsync(require("./orderByProp"))
}