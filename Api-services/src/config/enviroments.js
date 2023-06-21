require("dotenv").config({ path: "././.env" })
const { stringToArray } = require("../helpers")

module.exports = {
    PORT: 8002,
    PASSWORD_SIGN: process.env.PASSWORD_SIGN,
    ENTITIES: stringToArray(process.env.ENTITIES)
}   