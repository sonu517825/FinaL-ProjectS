const jwt = require('jsonwebtoken');



// token validation

const Authenticate = async function (req, res, next) {
    try {
        let token = req.headers['x-api-key']
        if (!token) {       // handle hadder + token  also can not send empty hadder
            return res.status(400).send({ status: false, msg: "please provide token in request hadder wth name 'x-api-key' " })
        }
        jwt.verify(token, "Er. Sonu Verma")
        // return of jwt veryfy is handle by catch because it is generally handle by internal tool 
        res.setHeader('x-api-key', token)
        next()
    }
    catch (err) {
        if (err.message == "invalid token") {
            res.status(401).send({ status: false, msg: "Token is Invalid" })
        }
        res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports.Authenticate = Authenticate
