const User = require("../config/DDBB")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const form = req.body
    const result = await User.login(form)
    const login = await result.data
    response(res, 201, login)
}
