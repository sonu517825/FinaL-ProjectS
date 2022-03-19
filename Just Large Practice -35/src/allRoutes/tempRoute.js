const express = require('express');
const router = express.Router();
const tempController=require("../allController/tempCntroller")
let middleWear = require("../middleWear/userValidation")



//temprecture


router.post("/getTempByCityName",middleWear.nameValidation , tempController.getTempByCityName)
router.get("/getTempAllCity",tempController.getTempAllCity)



module.exports = router;