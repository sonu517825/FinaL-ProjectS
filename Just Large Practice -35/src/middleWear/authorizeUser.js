const jwt = require('jsonwebtoken')


const authorizeUser = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        let password = req.body.password

        let decodedToken = jwt.verify(token, "Er. Sonu Verma"); // here decode token with help of Secret Key
        if (password === decodedToken.password && decodedToken.tag === "Software Engineer") {
            next()
        }
        else {
            return res.status(401).send({ status: false, msg: "Unauthorized access" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports.authorizeUser = authorizeUser