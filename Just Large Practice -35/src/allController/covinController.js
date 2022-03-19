let axios = require("axios")



// generateOTP

let generateOTP = async function (req, res) {
    try {
        let mobile = req.body
        if(!mobile){
            return res.status(400).send({status:false , msg: 'please provide mobile no. in req body with name "mobile" '})
        }
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: mobile
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {

        res.status(500).send({ msg: err.message })
    }
}




//verifyOTP

let verifyOTP = async function (req, res) {
    try {
        let otp = req.body
        if(!otp){
            return res.status(400).send({status: false , msg : "please give otp in request body with name 'otp' "})
        }
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP`,
            data: otp
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}





// show all state list

let StatesList = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



//  show all districk list

let DistrictsList = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



// find booking sedule by PINCODE

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        if(!pin){
            return res.status(400).send({status:false , msg : "please provide pincode in query with name 'pincode' "})
        }
        let date = req.query.date
        if(!date){
            return res.status(400).send({status:false , msg:"please provide date in query with name 'date' "})
        }
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}




// find booking sedule by districk 

let getByDicticks = async function (req, res) {
    try {
        let district_id = req.query.district_id
        if(!district_id){
            return res.status(400).send({status:false , msg : "please provide district id in query with name 'district_id' "})
        }
        let date = req.query.date
        if(!date){
            return res.status(400).send({status:false , msg:"please provide date in query with name 'date' "})
        }
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}




// find all calander by PINCODE

let getClanderByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        if(!pin){
            return res.status(400).send({status:false , msg : "please provide pincode in query with name 'pincode' "})
        }
        let date = req.query.date
        if(!date){
            return res.status(400).send({status:false , msg:"please provide date in query with name 'date' "})
        }
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find all calander by Dictrick_id

let getByCenterId = async function (req, res) {
    try {
        let center_id = req.query.center_id
        if(!center_id){
            return res.status(400).send({status:false , msg : "please provide center id in query with name 'center_id' "})
        }
        let date = req.query.date
        if(!date){
            return res.status(400).send({status:false , msg:"please provide date in query with name 'date' "})
        }
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id=${center_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find all calander by Dictrick_id

let getClanderByDistrick_id = async function (req, res) {
    try {
        let district_id = req.query.district_id
        if(!district_id){
            return res.status(400).send({status:false , msg : "please provide district id in query with name 'district_id' "})
        }
        let date = req.query.date
        if(!date){
            return res.status(400).send({status:false , msg:"please provide date in query with name 'date' "})
        }
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}




//  all  modules

module.exports.generateOTP = generateOTP
module.exports.verifyOTP = verifyOTP
module.exports.StatesList = StatesList
module.exports.DistrictsList = DistrictsList
module.exports.getByPin = getByPin
module.exports.getByDicticks = getByDicticks
module.exports.getClanderByPin = getClanderByPin
module.exports.getClanderByDistrick_id = getClanderByDistrick_id
module.exports.getByCenterId = getByCenterId