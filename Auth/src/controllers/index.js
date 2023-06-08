const { catchedAsync } = require("../utils")

module.exports = {
    register: catchedAsync(require("./register")),
    login: catchedAsync(require("./login"))
}