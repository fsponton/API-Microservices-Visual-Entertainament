const User = require("../config/DDBB")

module.exports = async (req, res) => {
    const form = req.body
    const result = await User.login(form)
    const login = await result.data

    res.status(200)
        .header({ token: result.headers.token })
        .json({ error: "false", message: `User ${login.message} is logged` })

}
