const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


let validateEmail = function (email) {
    let regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexForEmail.test(email)
};


let validateMobile = function (mobile) {
    let regexForMobile = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return regexForMobile.test(mobile)
}


const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Intern name is required",
        trim: true,
    },
    email: {
        type: String,
        required: "email Id is required",
        unique: [true, "enter unque email"],
        lowercase: true,
        trim: true,
        validate: [validateEmail, "Please enter a valid email address"],
        isAsync: false

    },
    mobile: {
        type: String,
        required: "mobile number is required",
        min: [1000000000, "mobile number should be 10 digit"],
        max: [9999999999, "mobile number should 10 digit"],
        unique: [true, "enter unique mobile no."],
        trim: true,
        validate: [validateMobile, "Please enter a valid mobile number"],
        isAsync: false
    },
    collegeId: {
        type: ObjectId,
        required: "please provide college id",
        ref: 'College',
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });



module.exports = mongoose.model('Intern', internSchema)




