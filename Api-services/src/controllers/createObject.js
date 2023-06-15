const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const form = req.body
    const token = req.token
    const result = await store.create(token, model, form)
    const list = await result.data
    response(res, 200, list)
}