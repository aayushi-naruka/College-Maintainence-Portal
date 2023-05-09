const User=require('../Models/AuthUserModel')
const redisclient=require('../Config/redis-connection')

exports.signupController = async (req,res) => {

    const emailToValidate = req.body.email ;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
    console.log(req.sessionID)
    if(emailRegexp.test(emailToValidate)){
      User.find({ userName : emailToValidate}).then((response)=>{
          if(response.length > 0){
            res.send({
              msg: "email already exist"
            })
          }
          else{
            let userData = new User({
              "userName" : req.body.email,
              "password" : req.body.password,
              "role" : req.body.role
            })
            userData.save().then(async()=>{

              var data = {
                "session-id": req.sessionID,
                "user": req.body.email                  
              }
          await redisclient.set("sessionId",`${req.sessionID}`,()=>{
                console.log("session created")               
              })
              res.send({
                msg : "data successfully inserted"
              })
            }).catch((err)=>{
              res.send({
                msg : "error in inserting data in database"    

              })
            })
          }
      })

    }
   else{
    res.json({
        msg:"email not in correct format"
    })
   }

}

exports.loginController = (req,res) => {

    const emailToValidate = req.body.email;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
  
    console.log(emailRegexp.test(emailToValidate));
  
    if (emailRegexp.test(emailToValidate)) {
      var numRow;

      User.findOne({ userName : emailToValidate , password : req.body.password}).then((response)=>{
        if(response.length ===1){
          res.send({
            msg : "login successfull"
          })
        }
        else{
          res.send({
            msg : "wrong credentials"
          })
        }
       
      })
    
    }
    else {
      res.json({
        comment: "email not in correct format"
      })
    }
   

}

exports.logoutController = (req,res) => {

                res.json({status:200,comment: "session deleted"})
       

}