const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')

const authRequired = (req, res, next) => {
    const token = req.signedCookies.token
    console.log('CookieToken', token)

    try {
        jwt.verify(token, JWT_SECRET)
    } catch (error) {
        res.status(401).send({
            message: "The beast is afoot",
            loggedIn: false
        })
        return
    }
    next()
}

modeule.exports = { authRequired }