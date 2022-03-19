const express = require('express');
const router = express.Router();
const userController = require("../allController/userController")
const middleWear1 = require("../middleWear/userValidation")
const middleWear2 = require("../middleWear/authenticateUser")
const middleWear3 = require("../middleWear/authorizeUser")


router.post("/createAccount", userController.createAccount)


router.post("/userNameLogin", middleWear1.nameValidation, userController.userNameLogin)
router.post("/userIDLogin", middleWear1.IDValidationin, userController.userIDLogin)


router.put("/updateAccountWithName",
    middleWear1.nameValidation,
    middleWear2.Authenticate,
    middleWear3.authorizeUser,
    userController.updateAccountWithName)



router.put("/updateAccountWithID", 
middleWear1.IDValidationin,
middleWear2.Authenticate,
middleWear3.authorizeUser,
userController.updateAccountWithID)


router.put("/restoreDeleteWithID",
middleWear1.IDValidationin,
middleWear2.Authenticate,
middleWear3.authorizeUser,
userController.restoreDeleteWithID)


router.put("/restoreDeleteWithuserName",
    middleWear1.nameValidation,
    middleWear2.Authenticate,
    middleWear3.authorizeUser,
 userController.restoreDeleteWithuserName
)



router.post("/getDetailsWithID",
middleWear1.IDValidationin,
middleWear2.Authenticate,
userController.getDetailsWithID)




router.post("/getDetailsWithUserName",
middleWear1.IDValidationin,
middleWear2.Authenticate,
userController.getDetailsWithUserName)





module.exports = router;