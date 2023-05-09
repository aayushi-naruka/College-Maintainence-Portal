const redisclient=require('../Config/redis-connection')
const Query=require('../Models/queryModel')
const fast2sms = require('fast-two-sms')

require("dotenv").config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



// AC3bd2a2b7812fdac89f080ac95555d323
// bcceac3b2aa4873fe129c17acc17f19e

exports.getAllQueriesController = async (req,res) => {

    Query.find().then((result)=>{
        res.json(result)
    }).catch(()=>{
        res.json({
            msg:"error occurred in fetching data"
        })
    })


}

exports.getQueryByUserIdController = async (req,res) => {

    Query.find({ created_by : req.params.id}).then((result)=>{
        res.json(result)
    }).catch(()=>{
        res.json({
            msg:"error occurred in fetching data"
        })
    })


}

exports.postQueryController = async (req,res) => {

    let department = req.body.department
    let title=req.body.title
     let room_no= req.body.room_no
     let created_by= req.body.created_by


    let queryDetails=new Query({
        department,
        title,
        room_no,
        created_by,
        created_date: new Date()
    })
    
    queryDetails.save().then(()=>{
        client.messages
      .create({body: `${title}`, from: '+12708125811', to: '+918233351047'})
      .then(message => {
        console.log(message.sid)
        res.json({
            msg : "query submitted successfully",
            result : message
        })
    });
        
        

    }).catch(()=>{
        res.json({
            msg : "error in submitting query"
        })
    })

}
