const store = require("../config/DDBB/index")
const { response } = require("../utils")
const { firstUpper } = require("../helpers")

module.exports = async (req, res) => {
    let { model, id } = req.params
    model = firstUpper(model)
    const result = await store[model].ById(id)
    response(res, 200, result)
}