


const welcome = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world        ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



const home = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world         home       ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const about = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world         about       ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const developer = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world       developer         ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const tmc = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world        tmc       ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



const facility = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world        facility         ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const use = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world       use       ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const guide = async function (req, res) {
    try {
        res.status(200).send("        Welcome in tech world       guide          ")
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




module.exports.welcome = welcome
module.exports.home = home
module.exports.about = about
module.exports.developer = developer
module.exports.tmc = tmc
module.exports.facility = facility
module.exports.use = use
module.exports.guide = guide
