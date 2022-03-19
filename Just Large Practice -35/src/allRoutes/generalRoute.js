const express = require('express');
const router = express.Router();
const generalController=require("../allController/generalController.js")




// general API
router.get("/welcome",generalController.welcome)
router.get("/home",generalController.home)
router.get("/about",generalController.about)
router.get("/developer",generalController.developer)
router.get("/tmc",generalController.tmc)
router.get("/facility",generalController.facility)
router.get("/use",generalController.use)
router.get("/guide-me",generalController.guide)



module.exports = router;