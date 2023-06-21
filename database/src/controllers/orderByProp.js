const store = require("../config/DDBB/index")
const { response } = require("../utils")
const { firstUpper } = require("../helpers")

module.exports = async (req, res) => {
    let { model } = req.params
    const { query } = req
    model = firstUpper(model)
    const values = Object.values(query)
    const result = await store[model].order([values])
    response(res, 200, result)
}