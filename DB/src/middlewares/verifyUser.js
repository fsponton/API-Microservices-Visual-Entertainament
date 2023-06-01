const jwt = require("jsonwebtoken")
const { PASSWORD_SIGN } = require("../config/enviroments")

//middleware - extraccion de token
module.exports = (req, res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { return res.status(401).send({ error: "Invalid authorization" }) }

    const decodedToken = jwt.verify(token, `${PASSWORD_SIGN}`)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'Token missing or invalid' })
    }

    next()
}