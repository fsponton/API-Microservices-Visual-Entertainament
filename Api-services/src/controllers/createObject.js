// const store = require("../config/DDBB/index")
// const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const form = req.body
    const token = req.token
    console.log("controller model", model)
    console.log("controllerform", form)
    console.log("controllerToken", token)
    // const result = await store.list(token, model)
    const list = await result.data
    response(res, 200, list)
}