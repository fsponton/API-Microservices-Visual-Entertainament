require("dotenv").config({ path: "././.env" })

module.exports = {
    URI_CONNECTION: process.env.URI_CONNECTION,
    PORT: 8000,
    PASSWORD_SIGN: process.env.PASSWORD_SIGN
}   