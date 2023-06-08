
const { User } = require("../config/DDBB/index")


//Middlware - Existence User
module.exports = async (req, res, next) => {
    const { email, password, name, gender } = req.body

    if (!email || !password || !name) { return res.status(401).send({ error: "true", message: "Email, password and name are required" }) }

    const emailLower = email.toLowerCase().trim()

    const user = await User.findOne({ email: emailLower })

    if (user) return res.status(401).send({ error: "true", message: `User with ${email} already exist's` });

    req.form = {
        name,
        email: emailLower,
        password,
        gender
    }

    next()
}
