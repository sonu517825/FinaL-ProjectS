const express = require('express');
const router = express.Router();
const memsController=require("../allController/memsController")



// Mems

router.post("/mems",memsController.getMems)
router.get("/memsId",memsController.getMemsId)


module.exports = router;