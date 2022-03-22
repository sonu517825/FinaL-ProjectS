const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


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



const createCollege = async function (req, res) {
    try {
        let requestBody = req.body

        if (!(isValidRequestBody(requestBody))) return res.status(400).send({ status: false, msg: "please provide college details in request body" })

        const { name, fullName, logoLink } = requestBody


        if (!isValidRequestValue(name)) return res.status(400).send({ status: false, msg: "please provide correct college name abbreviation" })
        if (!isString(name)) return res.status(400).send({ status: false, msg: "please provide college name in string form" })
        let alreadyNameUse = await collegeModel.find({ name: name })
        if (alreadyNameUse.length > 0) return res.status(400).send({ status: false, msg: `Your college abbreviation name "${name}" is already use` })


        if (!isValidRequestValue(fullName)) return res.status(400).send({ status: false, msg: "please provide correct college full name" })
        if (!isString(fullName)) return res.status(400).send({ status: false, msg: "please provide full college name in string form" })


        if (!isValidRequestValue(logoLink)) return res.status(400).send({ status: false, msg: "please provide correct logo link" })
        if (!isString(logoLink)) return res.status(400).send({ status: false, msg: "please provide your college logo link in string form" })


        let createCollege = await collegeModel.create(requestBody)
        let data = await collegeModel.findById(createCollege._id)
            .select({ name: 1, fullName: 1, logoLink: 1, isDeleted: 1, _id: 0 })


        return res.status(201).send({ status: true, msg: data })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



const collegeDetails = async function (req, res) {
    try {
        let query = req.query
        let collegeName = query.collegeName


        if (!isValidRequestBody(query)) return res.status(400).send({ status: false, msg: "please provide 'collegeName' in query params" })
        if (!isValidRequestValue(collegeName)) return res.status(400).send({ status: false, msg: "please provide 'collegeName' with their value" })
        //if (!isString(collegeName)) return res.status(400).send({ status: false, msg: "please provide 'collegeName' in query params only string case" })
        // because query return object key and value and value his make always a string


        let collegeDetails = await collegeModel.findOne({ name: collegeName })
        if (!collegeDetails) return res.status(404).send({ status: false, msg: `your college name "${collegeName}" is not present` })


        let Intern = await internModel.find({ collegeId: collegeDetails._id })
            .select({ _id: 1, name: 1, email: 1, mobile: 1 })
        if (Intern.length <= 0) return res.status(404).send({ status: false, msg: `No intern registerd from college '${collegeName}` })


        internDetails = {
            name: collegeDetails.name,
            fullName: collegeDetails.fullName,
            logoLink: collegeDetails.logoLink,
            Intern: Intern
        }
        return res.status(200).send({ status: true, msg: internDetails })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports.createCollege = createCollege
module.exports.collegeDetails = collegeDetails



// 2nd method to make array object

        //  let interests = []
        // for (let i = 0; i < Intern.length; i++) {
        //     let obj = {}
        //      obj._id = Intern[i]._id
        //      obj.name = Intern[i].name
        //      obj.email = Intern[i].email
        //      obj.mobile = Intern[i].mobile
        //     interests.push(obj)
        // }
        // console.log(interests)


//interests:interests   // for final data creation

 // find return array // findOne return object // nothing found return null