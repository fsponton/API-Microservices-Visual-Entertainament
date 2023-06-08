const jwt = require("jsonwebtoken")
const { PASSWORD_SIGN } = require("../config/enviroments")

module.exports = async (req, res) => {
    const { user } = req

    const userForToken = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    const token = jwt.sign(userForToken, `${PASSWORD_SIGN}`, { expiresIn: 60 * 20 })

    res.status(200)
        .header({ token })
        .json({ error: "false", message: `User ${user.email} is logged` })
}


