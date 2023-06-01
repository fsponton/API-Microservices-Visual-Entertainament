const { User } = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { form } = req
    const result = await User.create(form)
    response(res, 201, result)
}
