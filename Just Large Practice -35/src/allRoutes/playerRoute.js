const express = require('express');
const router = express.Router();
const playerController = require("../allController/playerController")
const middleWear1 = require("../middleWear/userValidation")
const middleWear2 = require("../middleWear/authenticateUser")
const middleWear3 = require("../middleWear/authorizeUser")




// player API

router.post("/createPlayer",
middleWear1.nameValidation , 
middleWear2.Authenticate,
middleWear3.authorizeUser,
playerController.createPlayer)


router.get("/findPlayer",middleWear1.nameValidation , playerController.findPlayer)


router.get("/allPlayerRecord",middleWear1.nameValidation, playerController.allPlayerRecord)

router.get("/playerInfo",middleWear1.nameValidation , playerController.per_Info_Player)


router.get("/Playerscore",middleWear1.nameValidation , playerController.per_Info_TM_Run_w_100_50_Player)



module.exports = router;