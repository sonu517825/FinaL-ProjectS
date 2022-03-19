const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId

const loginAccountSchema = new mongoose.Schema(
    {
        password: {
            type: String,
        },
        userId: {
            type: objectid,
        }
    },
    { timestamps: true });


module.exports = mongoose.model('loginAccount', loginAccountSchema)

