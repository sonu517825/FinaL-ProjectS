const accountModel = require("../allModel/accountModel")
const jwt = require("jsonwebtoken")



// create account

const createAccount = async function (req, res,) {
    try {
        let data = req.body
        if (!(data.email || data.password)) {
            res.status(400).send({ status: false, msg: "please provide valid email and passwaord in request body" })
        }
        else {
            if (data.isDeleted == true) {
                res.status(400).send({ status: false, msg: "You can not create deleted account" })
            }
            if (data.isRestore == true) {
                res.status(400).send({ status: false, msg: "You can not restore at time of create account" })
            }
            let Data = await accountModel.create(data)
            return res.status(201).send({ status: true, msg: { username: Data.email, userId: Data._id, password: Data.password } })
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



// login with user name

const userNameLogin = async function (req, res) {
    try {
        let username = req.body.email
        let user = await accountModel.findOne({ email: username })
        let payLoad = {
            userId: user._id,
            password: user.password,
            tag: "Software Engineer"
        }
        let secretKey = "Er. Sonu Verma"
        let token = jwt.sign(payLoad, secretKey)
        res.setHeader('x-api-key', token)
        res.status(201).send({ status: true, msg: { token: token } })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



// login with user ID

const userIDLogin = async function (req, res) {
    try {
        let userId = req.body.userId
        let user = await accountModel.findOne({ _id: userId }) // return null               
        let payLoad = {
            userId: user._id,
            password: user.password,
            tag: "Software Engineer"
        }
        let secretKey = "Er. Sonu Verma"
        let token = jwt.sign(payLoad, secretKey)
        res.setHeader('x-api-key', token)
        res.status(201).send({ status: true, msg: { token: token } })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// update account from user name

const updateAccountWithName = async function (req, res) {
    try {
        let username = req.body.email
        let password = req.body.password
        let account = await accountModel.findOne({ email: username, password: password })
        if (account.isDeleted == true) {
            return res.status(400).send({ status: false, msg: "Your Account is deleted" })
        }

        let input = req.query

        let filters = Object.entries(input) //[['a' , 'b'],['c','d']]

        if (Object.keys(input).length == 0) {
            res.status(400).send({ status: false, msg: "please provide fiter in query" })
        }
        if (Object.keys(input).length != 0) {
            let emptyInput = filters.filter((ele) => ele[1] == '')
            if (emptyInput.length != 0) {
                res.status(400).send({ status: false, msg: "You can not pass empty filter" })
            }
        }

        if ((input.isDeleted || input.isRestore)) {
            return res.status(400).send({ status: false, msg: "You can not delete or restore in this API" })
        }


        // comming soon



    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// update account from user ID

const updateAccountWithID = async function (req, res) {
    try {
        let userId = req.body.userId
        let password = req.body.password
        let account = await accountModel.findOne({ _id: userId, password: password })
        if (account.isDeleted == true) {
            return res.status(400).send({ status: false, msg: "Your Account is deleted" })
        }

        let input = req.query

        let filters = Object.entries(input) //[['a' , 'b'],['c','d']]

        if (Object.keys(input).length == 0) {
            res.status(400).send({ status: false, msg: "please provide fiter in query" })
        }
        if (Object.keys(input).length != 0) {
            let emptyInput = filters.filter((ele) => ele[1] == '')
            if (emptyInput.length != 0) {
                res.status(400).send({ status: false, msg: "You can not pass empty filter" })
            }
        }

        if ((input.isDeleted || input.isRestore)) {
            return res.status(400).send({ status: false, msg: "You can not delete or restore in this API" })
        }


        // comming soon



    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// restore or delete account from user ID

const restoreDeleteWithID = async function (req, res) {
    try {
        let userId = req.body.userId
        let password = req.body.password

        let input = req.query.choice
        if (input) {
            if (input == 'restore') {
                let restore = await accountModel.findOneAndUpdate({ _id: userId, password: password },
                    {
                        $set: {
                            isDeleted: false, deletedAt: null,
                            isRestore: true, restoredAt: Date.now()
                        }
                    },
                    { new: true })
                return res.status(200).send({ status: true, msg: restore })
            }
            else {
                if (input == 'delete') {
                    let deleted = await accountModel.findOneAndUpdate({ _id: userId, password: password },
                        {
                            $set: {
                                isDeleted: true, deletedAt: Date.now(),
                                isRestore: false, restoredAt: null
                            }
                        },
                        { new: true })
                    return res.status(200).send({ status: true, msg: "your account is deleted" })
                }
                res.status(400).send({ status: false, msg: "please fill correct choice 'restore' OR 'delete' " })
            }
        }
        else {
            res.status(400).send({ status: false, msg: "please provide 'choice' in query 'restore' OR 'delete' without quote" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// restore or delete account from user name

const restoreDeleteWithuserName = async function (req, res) {
    try {
        let username = req.body.email
        let password = req.body.password

        let input = req.query.choice
        if (input) {
            if (input == 'restore') {
                let restore = await accountModel.findOneAndUpdate({ email: username, password: password },
                    {
                        $set: {
                            isDeleted: false, deletedAt: null,
                            isRestore: true, restoredAt: Date.now()
                        }
                    },
                    { new: true })
                return res.status(200).send({ status: true, msg: restore })
            }
            else {
                if (input == 'delete') {
                    let deleted = await accountModel.findOneAndUpdate({ email: username, password: password },
                        {
                            $set: {
                                isDeleted: true, deletedAt: Date.now(),
                                isRestore: false, restoredAt: null
                            }
                        },
                        { new: true })
                    return res.status(200).send({ status: true, msg: "your account is deleted" })
                }
                res.status(400).send({ status: false, msg: "please fill correct choice 'restore' OR 'delete' " })
            }
        }
        else {
            res.status(400).send({ status: false, msg: "please provide 'choice' in query 'restore' OR 'delete' without quote" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// get account details from user id

const getDetailsWithID = async function (req, res) {
    try {
        let userId = req.body.userId
        let password = req.body.password
        let account = await accountModel.findOne({ _id: userId, password: password })
        if (account.isDeleted == true) {
            return res.status(404).send({ status: false, msg: "Your account is deleted " })
        }

        let input = req.query

        let filters = Object.entries(input) //[['a' , 'b'],['c','d']]

        if (Object.keys(input).length == 0) {
            res.status(400).send({ status: false, msg: "please provide fiter in query" })
        }
        if (Object.keys(input).length != 0) {
            let emptyInput = filters.filter((ele) => ele[1] == '')
            if (emptyInput.length != 0) {
                res.status(400).send({ status: false, msg: "You can not pass empty filter" })
            }
        }

        //* below methods for converting inputData to array of objects
        let filtersAsObject = []

        for (let i = 0; i < filters.length; i++) {
            let element = filters[i]
            let obj = {}
            obj[element[0]] = element[1]
            filtersAsObject.push(obj)
        }

        let finalFilters = filtersAsObject
        let getData = await accountModel.find({ $and: finalFilters })
        if (getData.length == 0) {
            return res.status(404).send({ status: false, msg: "no data found" })
        }
        res.status(200).send({ status: true, msg: getData})
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}




// get account details from user name

const getDetailsWithUserName = async function (req, res) {
    try {
        let username = req.body.email
        let password = req.body.password
        let account = await accountModel.findOne({ email:username, password: password })
        if (account.isDeleted == true) {
            return res.status(404).send({ status: false, msg: "Your account is deleted " })
        }

        let input = req.query

        let filters = Object.entries(input) //[['a' , 'b'],['c','d']]

        if (Object.keys(input).length == 0) {
            res.status(400).send({ status: false, msg: "please provide fiter in query" })
        }
        if (Object.keys(input).length != 0) {
            let emptyInput = filters.filter((ele) => ele[1] == '')
            if (emptyInput.length != 0) {
                res.status(400).send({ status: false, msg: "You can not pass empty filter" })
            }
        }

        //* below methods for converting inputData to array of objects
        let filtersAsObject = []

        for (let i = 0; i < filters.length; i++) {
            let element = filters[i]
            let obj = {}
            obj[element[0]] = element[1]
            filtersAsObject.push(obj)
        }

        let finalFilters = filtersAsObject
        let getData = await accountModel.find({ $and: finalFilters })
        if (getData.length == 0) {
            return res.status(404).send({ status: false, msg: "no data found" })
        }
        res.status(200).send({ status: true, msg: getData})
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}




module.exports.createAccount = createAccount
module.exports.userNameLogin = userNameLogin
module.exports.userIDLogin = userIDLogin
module.exports.updateAccountWithName = updateAccountWithName
module.exports.updateAccountWithID = updateAccountWithID
module.exports.restoreDeleteWithID = restoreDeleteWithID
module.exports.restoreDeleteWithuserName = restoreDeleteWithuserName
module.exports.getDetailsWithID = getDetailsWithID
module.exports.getDetailsWithUserName=getDetailsWithUserName


