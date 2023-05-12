const express = require('express')
const router = express.Router()
const {loginController,signupController,logoutController,userController}=require('../Controllers/authUserController')

router.post("/login", loginController)
router.post("/signup", signupController)
router.get("/logout", logoutController)
router.get("/user", userController)

module.exports=router