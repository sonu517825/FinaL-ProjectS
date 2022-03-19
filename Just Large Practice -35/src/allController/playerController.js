const playerModel = require("../allModel/playerModel")


// store player record
const createPlayer = async function (req, res) {
    try {
        let player = req.body;
        let SavedData = await playerModel.create(player)
        res.status(201).send({ status: true, msg: "Data store successfull", id: SavedData._id })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


// find full player record by id

const findPlayer = async function (req, res) {
    try {
        let id = req.query._id
        if (!id) {
            res.status(400).send({ status: false, msg: "please provide id in query with name '_id' " })
        }
        let SavedData = await playerModel.findById(id)
        res.status(200).send({ status: true, msg: SavedData })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




// all player record
const allPlayerRecord = async function (req, res) {
    try {
        let SavedData = await playerModel.find()
        res.status(200).send({ status: true, msg: SavedData })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



// onlyPesonalInfo + team Info

const per_Info_Player = async function (req, res) {
    try {
        let id = req.query._id
        if (!id) {
            res.status(400).send({ status: false, msg: "please provide id in query with name '_id' " })
        }
        let SavedData = await playerModel.find().select({ personalInformation: 1, TeamInformation: 1 })
        res.send({ status: true, msg: SavedData })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}






// personal + team + total match + run + wicket + 100 + 50 + 
const per_Info_TM_Run_w_100_50_Player = async function (req, res) {
    try {
        let id = req.query._id
        if (!id) {
            res.status(400).send({ status: false, msg: "please provide id in query with name '_id' " })
        }
        let SavedData = await playerModel.find().select(
            {
                personalInformation: 1,
                TeamInformation: 1,
                totalMatch: 1,
                totalRUN: 1,
                totalWicket: 1,
                total100: 1,
                total50: 1
            })
        res.send({ status: true, msg: SavedData })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}





module.exports.createPlayer = createPlayer
module.exports.findPlayer = findPlayer
module.exports.allPlayerRecord = allPlayerRecord
module.exports.per_Info_Player = per_Info_Player
module.exports.per_Info_TM_Run_w_100_50_Player = per_Info_TM_Run_w_100_50_Player
