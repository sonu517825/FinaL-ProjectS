const express = require('express');
const router = express.Router();
const covinController=require("../allController/covinController.js")
const middleWear = require('../middleWear/userValidation')

// covin_API

router.post("/generateOTP", middleWear.nameValidation , covinController.generateOTP)
router.post("/verifyOTP", middleWear.nameValidation , covinController.verifyOTP)
router.get("/cowin/statesList", covinController.StatesList)
router.get("/cowin/districtsList/:stateId", covinController.DistrictsList)
router.get("/cowin/getByPin",covinController.getByPin)
router.get("/covin/getByDisticks",covinController.getByDicticks)
router.get("/covin/getClanderByPin",covinController.getClanderByPin)
router.get("/covin/getClanderbydistrick_id",covinController.getClanderByDistrick_id)
router.get("/covin/getByCenterId",covinController.getByCenterId)


module.exports = router;