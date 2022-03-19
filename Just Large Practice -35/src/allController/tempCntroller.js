let axios = require("axios")



// find all cities temp. in sorted order

let getTempByCityName = async function (req, res) {

    try {
        //let appid = req.query.appid
        let appid = '573f5aebb157b86165ac4086e6743c2a'
        let city = req.query.q
        if(!city){
            return res.status(400).send({status:false , msg:"please give city name in query with name 'q' "})
        }
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        res.status(200).send({ status: true, msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// find all cities temp. in sorted order

let getTempAllCity = async function (req, res) {

    try {
      //  let appid = req.query.appid   
      let appid = '573f5aebb157b86165ac4086e6743c2a'
        let finalRes = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Lucknow"]
        for (let i = 0; i < cities.length; i++) {
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
            }
            let result = await axios(options);
            let res = { city: cities[i] }
            res.temp = result.data.main.temp
            finalRes.push(res)
        }
        let Sort = finalRes.sort(check)
        function check(a, b) {
            //return b.temp - a.temp
            return a.temp - b.temp
            //if(a.temp<b.temp)
            //return 1
            //else return -1
        }
        res.status(200).send({ status: true, msg: Sort })
        console.log(finalRes)
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getTempByCityName = getTempByCityName
module.exports.getTempAllCity = getTempAllCity