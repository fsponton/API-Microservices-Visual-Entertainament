const store = require("../config/DDBB/index")
const { response } = require("../utils")
const { firstUpper } = require("../helpers")

module.exports = async (req, res) => {
    let { model } = req.params
    model = firstUpper(model)
    const result = await store[model].list()
    response(res, 200, result)
}