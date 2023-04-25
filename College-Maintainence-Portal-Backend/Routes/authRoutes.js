const express = require('express')
const router = express.Router()
const {loginController,signupController,logoutController}=require('../Controllers/authUserController')

router.post("/login", loginController)
router.post("/signup", signupController)
router.post("/logout", logoutController)

module.exports=router