const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const token = req.token
    const { prop, shape } = req.query
    const result = await store.sortedList(token, model, prop, shape)
    const list = await result.data
    response(res, 200, list)
}