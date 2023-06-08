const { catchedAsync } = require("../utils")


module.exports = {
    register: catchedAsync(require("./register"))
}