const accountModel = require("../allModel/accountModel")
const loginModel = require("../allModel/loginModel")


// user validation

const nameValidation = async function (req, res, next) {
    try {
        let username = req.body.email
        let password = req.body.password
        if (!(username && password)) {      // handle both
            res.status(400).send({ status: false, msg: "Please provide username and password on request body" })
        }
        else {
            let user = await accountModel.findOne({ email: username, password: password }) // return null
            if (!user) {
                return res.status(404).send({ status: false, msg: " Account not present " })
            }
            else {
                next()
            }
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



// id validation

const IDValidation = async function (req, res, next) {
    try {
        let userId = req.body.userId
        let password = req.body.password
        if (!(userId && password)) {      // handle both
            res.status(400).send({ status: false, msg: "Please provide userId and password on request body" })
        }
        else {
            let user = await accountModel.findOne({ _id: userId, password: password }) // return null
            if (!user) {
                return res.status(404).send({ status: false, msg: " Account not present " })
            }
            else {
                if (req.originalUrl == "/userIDLogin") {
                    let login = await loginModel.findOne({ userId: userId, password: password })
                    if (login) {
                        res.status(403).send({ status: false, msg: "Already login Not allowed" })
                    }
                    else {
                        await loginModel.create(req.body)
                        next()
                    }
                }
                else {
                    next()
                }
            }
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports.nameValidation = nameValidation
module.exports.IDValidationin = IDValidation

