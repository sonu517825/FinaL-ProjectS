const mongoose = require('mongoose');



const validateEmail = function (email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}




const validatePassword = function (password) {
    const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    return passwordRegex.match(password)
}



const userAccountSchema = new mongoose.Schema(
    {
        personalInformation: {
            firstName:
            {
                type: String,
                default: null
            },
            middleName:
            {
                type: String,
                default: null
            },
            lastName: {
                type: String,
                default: null
            },
            DOB: {
                type: String,
                default: null
            },
            Age: {
                type: Number,
                default: null
            },
            maritalStatus: {
                type: String,
                default: null
            },
            personFather: {
                type: String,
                default: null
            },
            personMother: {
                type: String,
                default: null
            },
            personBrother: {
                type: [],
                default: null
            },
            personSister: {
                type: [],
                default: null
            }
        },
        personAddress: {
            Nationality: {
                type: String,
                default: null
            },
            State: {
                type: String,
                default: null
            },
            Distick: {
                type: String,
                default: null
            },
            Block: {
                type: String,
                default: null
            },
            Village: {
                type: String,
                default: null
            },
            PinCode: {
                type: String,
                default: null
            },
        },
        personEducation: {
            "PrePrimary(5th)": {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
            "Primary(8th)": {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
            "Secondary(10)": {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
            "SeniorSecondary(12)": {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
            Graduation: {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
            PostGraduation: {
                totalNumber: {
                    type: Number,
                    default: null
                },
                obtainNumber: {
                    type: Number,
                    default: null
                }
            },
        },
        personConfidentailInformation: {
            AadharNumber: {
                type: Number,
                default: null
            },
            PANNumber: {
                type: Number,
                default: null
            },
            RasonCardNumber: {
                type: Number,
                default: null
            },
            DLNumber: {
                type: Number,
                default: null
            },
            VoterIDNumber: {
                type: Number,
                default: null
            },
            BankAccountNumber: {
                type: Number,
                default: null
            },
        },
        SomeOther: {
            votingStatus: {
                type: Boolean,
                default: false
            },
            adultStatus: {
                type: Boolean,
                default: false
            },
            drivingStatus: {
                type: Boolean,
                default: false
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"please fill valid email"]
            validate: [validateEmail, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: true,
            unique: true,
            //match:["^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"]
            //validate: [validatePassword, "Please enter a valid password contain atleast 8 character One lower case One Upper case One number One Special Character"]
        },
        mobile: {
            type: String,
            default: null
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date,
        isRestore: {
            type: Boolean,
            default: false
        },
        restoredAt: Date
    },
    { timestamps: true });

module.exports = mongoose.model('userAccount', userAccountSchema)






