const { catchedAsync } = require("../utils")

module.exports = {
    verifyUser: require("./verifyUser"),
    verifyLogin: catchedAsync(require("./verifyLogin")),
    verifyExistenceUser: catchedAsync(require("./verifyExistenceUser")),
    verifyExistence: catchedAsync(require("./verifyExistence")),
    validateModel: require("./validateModel"),
}