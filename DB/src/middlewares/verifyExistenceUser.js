
const { User } = require("../config/DDBB/index")
const { userError } = require("../utils/errors")

//Middlware - Existence User
module.exports = async (req, res, next) => {
    const { email, password, name, gender } = req.body

    if (!email || !password || !name) { throw new userError(`Email, password and name are required`, 400) }

    const emailLower = email.toLowerCase().trim()

    const user = await User.findOne({ email: emailLower })

    if (user) { throw new userError(`User with ${email} already exist's`, 400) }


    req.form = {
        name,
        email: emailLower,
        password,
        gender
    }

    return next()
}
