const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const { query } = req
    const value = Object.values(query)

    const result = await store[model].order([value])
    response(res, 200, result)
}