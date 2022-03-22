const express = require('express');
const router = express.Router();
const collegeController = require("../controller/collegeController")
const internController = require("../controller/internController")



router.get('/test-me', function (req, res) {
    try {
        return res.status(200).send({ status: true, msg: "Test success" })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
})



router.post('/colleges', collegeController.createCollege)


router.post('/interns', internController.createInterns)


router.get('/collegeDetails', collegeController.collegeDetails)


module.exports = router;

