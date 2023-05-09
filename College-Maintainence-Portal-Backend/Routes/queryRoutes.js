const express = require('express')
const router = express.Router()
const {getAllQueriesController,postQueryController,getQueryByUserIdController}=require('../Controllers/queryController')

router.get("/all", getAllQueriesController)
router.post("/", postQueryController)
router.get("/:id",getQueryByUserIdController)

module.exports=router