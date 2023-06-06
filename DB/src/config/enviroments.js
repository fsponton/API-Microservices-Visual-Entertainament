require("dotenv").config({ path: "././.env" })
const { stringToArray } = require("../helpers")

module.exports = {
    URI_CONNECTION: process.env.URI_CONNECTION,
    PORT: 8000,
    PASSWORD_SIGN: process.env.PASSWORD_SIGN,
    ENTITIES: stringToArray(process.env.ENTITIES)
}   