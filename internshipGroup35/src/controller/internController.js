const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
const ObjectId = require('mongoose').Types.ObjectId


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


const isValidRequestValue = function (isValidRequestValue) {
    if (typeof isValidRequestValue === 'undefined' || isValidRequestValue === null) return false
    if (typeof isValidRequestValue === 'string' && isValidRequestValue.trim().length === 0) return false
    return true
}


const isString = function (isString) {
    if (typeof isString !== 'string') return false
    return true
}


const isNumber = function (isNumber) {
    if (typeof isNumber !== 'number') return false
    return true
}


const isNumberRange = function (isNumberRange) {
    if (isNumberRange < 1000000000 || isNumberRange > 9999999999) return false
    return true
}


const isObjectId = function (isObjectId) {
    let result = ObjectId.isValid(isObjectId)
    return result
}


let validateEmail = function (email) {
    let regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexForEmail.test(email)
};


let validateMobile = function (mobile) {
    let regexForMobile = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return regexForMobile.test(mobile)
}


const createInterns = async function (req, res) {
    try {
        let requestBody = req.body


        if (!isValidRequestBody(requestBody)) return res.status(400).send({ status: false, msg: "please provide intern details in request body" })


        const { name, email, mobile, collegeId } = requestBody


        if (!isValidRequestValue(name)) return res.status(400).send({ status: false, msg: "please provide correct intern name" })
        if (!isString(name)) return res.status(400).send({ status: false, msg: "please provide correct intern name in string form" })


        if (!isValidRequestValue(email)) return res.status(400).send({ status: false, msg: "please provide correct email address" })
        if (!isString(email)) return res.status(400).send({ status: false, msg: "please provide your email in string case" })
        if (!validateEmail(email)) return res.status(400).send({ status: false, msg: `your email "${email}" is invalid` })
        let alreadyEmailUse = await internModel.find({ email: email })
        if (alreadyEmailUse.length > 0) return res.status(400).send({ status: false, msg: `Your email address "${email}" is already use` })


        if (!isValidRequestValue(mobile)) return res.status(400).send({ status: false, msg: "please provide correct mobile no." })
        if (!isString(mobile)) return res.status(400).send({ status: false, msg: "please provide your mobile number in string case" })
        if (!isNumberRange(mobile)) return res.status(400).send({ status: false, msg: "your mobile No. should be 10 digit " })
        if (!validateMobile(mobile)) return res.status(400).send({ status: false, msg: `your mobile No. "${mobile}" is invalid` })
        let alreadyMobileUse = await internModel.find({ mobile: mobile })
        if (alreadyMobileUse.length > 0) return res.status(400).send({ status: false, msg: `Your mobile No. "${mobile}" is already use` })


        if (!isValidRequestValue(collegeId)) return res.status(400).send({ status: false, msg: "please provide correct college Id" })
        if (!isObjectId(collegeId)) return res.status(400).send({ status: false, msg: "your college id must be a object Id" })
        let isCollegeIdPresent = await collegeModel.findById({ _id: collegeId })
        if (!isCollegeIdPresent) return res.status(404).send({ status: false, msg: `your college id "${collegeId}" is not present` })


        let createInterns = await internModel.create(requestBody)
        //createInterns = await internModel.findById({ _id:createInterns._id }).populate('collegeId')
        //return res.status(201).send({status:true , msg :createInterns})


        createInterns = await internModel.findById({ _id: createInterns._id })
        .select({ name: 1, email: 1, mobile: 1, collegeId: 1, isDeleted: 1, _id: 0 })
        return res.status(201).send({ status: true, msg: createInterns })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports.createInterns = createInterns




