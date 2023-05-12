const redisclient=require('../Config/redis-connection')
const Query=require('../Models/queryModel')


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

exports.getQueryByUserIdController = async(req,res) => {
    let cookie=req.cookies.session
    let email=await redisclient.get(`${cookie}`)
 
        Query.find({ created_by : email}).then((result)=>{
            res.json(result)
        }).catch(()=>{
            res.json({
                msg:"error occurred in fetching data"
            })
        })
   

}

exports.postQueryController = async (req,res) => {
    let cookie=req.body.cookie
    let email=await redisclient.get(`${cookie}`)
    let department = req.body.department
    let title=req.body.title
     let room_no= req.body.room_no
     let created_by= email

    let queryDetails=new Query({
        department,
        title,
        room_no,
        created_by,
        created_date: new Date(),
        status: "todo"
    })
    
    queryDetails.save().then(()=>{
    //     client.messages
    //   .create({body: `Room No.: ${room_no}, Issue :${title}, Department: ${department}`, from: '+12708125811', to: '+918233351047'})
    //   .then(message => {
    //     console.log(message.sid)
    //     res.json({
    //         msg : "query submitted successfully",
    //         result : message
    //     })
    // });
      res.send({status: true , msg : "query submitted successfully"})  
        

    }).catch(()=>{
        res.json({
            msg : "error in submitting query"
        })
    })

}



exports.changeQueryStatus=async(req,res)=>{

    let queryId=req.body.queryId;
    let querystatus= req.body.querystatus;

    Query.findOneAndUpdate({_id : queryId},{status: querystatus}).then((err,docs)=>{
         
        res.json({
            status : true,
            msg : "status updated successfully"
        })

    })

}
