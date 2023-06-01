const { Schema } = require("mongoose")
const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const form = req.body
    const list = await store[model].find()
    const _id = (list.length) + 1
    const result = await store[model].insert({ ...form, _id })
    response(res, 201, result)
}


