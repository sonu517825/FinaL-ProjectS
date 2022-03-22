const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: "college short name is required",
        unique: [true,"enter unique college name abbribation"],
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: "college full name is required",
        trim: true
    },
    logoLink: {
        type: String,
        required: "logoLink is required",
        trim: true,
        lowercase: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


}, { timestamps: true })

module.exports = mongoose.model("College", collegeSchema)
