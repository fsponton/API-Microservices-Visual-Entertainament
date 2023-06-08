
const { User } = require("../config/DDBB/index")
const { userError } = require("../utils/errors")
const bcrypt = require("bcryptjs")

//Middleware - Login
module.exports = async (req, res, next) => {

    const { email, password } = req.body
    const emailLower = email.toLowerCase().trim()

    const user = await User.findOne({ email: emailLower })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(password, user.password)
    if (!(user && encryptedPassword)) { throw new userError('Invalid email or password', 401) }


    req.user = user

    return next()






}