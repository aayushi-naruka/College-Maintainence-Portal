const express = require('express')
const router = express.Router()
const {getAllQueriesController,postQueryController,getQueryByUserIdController,changeQueryStatus}=require('../Controllers/queryController')

router.get("/all", getAllQueriesController)
router.post("/", postQueryController)
router.get("/",getQueryByUserIdController)
router.put("/",changeQueryStatus)
module.exports=router