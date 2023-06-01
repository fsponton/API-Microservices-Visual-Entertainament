
const { User } = require("../config/DDBB/index")
const bcrypt = require("bcryptjs")

module.exports = async (req, res, next) => {
    const { email, password } = req.body
    const emailLower = email.toLowerCase()

    const user = await User.findOne({ email })

    if (user) return res.status(401).send({ status: "error", msg: `User with ${email} already exist's` });



    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const form = {
        email: emailLower,
        password: hash
    }

    req.form = form

    next()
}
