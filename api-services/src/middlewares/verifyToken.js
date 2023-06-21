const jwt = require("jsonwebtoken")
const { PASSWORD_SIGN } = require("../config/enviroments")
const { tokenError } = require("../utils/errors")

//Middleware - Verify token 
module.exports = (req, res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else {
        throw new tokenError('Invalid authorization', 401)
    }

    const decodedToken = jwt.verify(token, `${PASSWORD_SIGN}`)

    if (!token || !decodedToken) { throw new tokenError('Token missing or invalid', 401) }

    req.token = token

    return next()
}