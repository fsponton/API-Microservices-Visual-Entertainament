
const { User } = require("../config/DDBB/index")

const bcrypt = require("bcryptjs")

//Middleware - Login
module.exports = async (req, res, next) => {
    const { email, password } = req.body
    const emailLower = email.toLowerCase().trim()

    const user = await User.findOne({ email: emailLower })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(password, user.password)

    if (!(user && encryptedPassword)) return res.status(401).send({ error: "true", message: 'Invalid user or password' });

    // return res.status(401).send({ error: "true", message: 'Invalid user or password' });

    req.user = user

    next()
}