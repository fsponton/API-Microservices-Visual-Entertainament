require("dotenv").config({ path: "././.env" })
const { stringToArray } = require("../helpers")

module.exports = {
    PORT: process.env.PORT,
    PASSWORD_SIGN: process.env.PASSWORD_SIGN,
    ENTITIES: stringToArray(process.env.ENTITIES)
}   