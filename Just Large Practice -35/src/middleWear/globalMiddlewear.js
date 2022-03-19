const address = require('address')

// Here you find total click on your page , ip , date , time , route information

var count = 0
const globalMiddleWere = function (req, res, next) {
    try {

        // counting 
        count = count + 1
        // date stamping
        let date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
        let year = date_ob.getFullYear()


        // time stamping
        let hours = ("0" + date_ob.getHours()).slice(-2)
        let minutes = ("0" + date_ob.getMinutes()).slice(-2)
        let seconds = ("0" + date_ob.getSeconds()).slice(-2)



        // YYYY-MM-DD    HH:MM:SS    IP     Router   
        console.log(`Date : ${year + "-" + month + "-" + date }\nTime : ${hours + " : " + minutes + " : " + seconds}\nIP Address : ${address.ip() }\nCurrent URL : ${req.originalUrl}`);
        console.log("TOTAL TIMES Visit :",count)
        next()
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports.globalMiddleWere = globalMiddleWere