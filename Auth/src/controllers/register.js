const User = require("../config/DDBB")

module.exports = async (req, res) => {
    const form = req.body
    const result = await User.register(form)
    const newUser = result.data

    return res.status(333).json({ newUser })
}
