const store = require("../config/DDBB/index")
const { response } = require("../utils")
const mongoose = require("mongoose")

module.exports = async (req, res) => {
    const { model } = req.params
    const form = req.body

    const _id = new mongoose.Types.ObjectId;

    const result = await store[model].insert({ ...form, _id })
    response(res, 201, result)
}


