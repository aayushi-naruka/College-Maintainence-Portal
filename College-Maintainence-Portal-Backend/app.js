const express=require('express')
const app=express()
const authRoutes=require('./Routes/authRoutes')
const queryRoutes=require('./Routes/queryRoutes')
const PORT=1234
const cors=require('cors')
const connectToDb=require('./connect/MongooseConnect')
const connectRedis = require('connect-redis')
const redisClient=require('./Config/redis-connection')
const session = require('express-session')
const cookieParser=require('cookie-parser')
require("dotenv").config()

const databaseName = 'mongodb+srv://narukaayushi02:IvOl3TUBXUfOLuSG@cluster0.rfpilfr.mongodb.net/?retryWrites=true&w=majority'

app.use(cookieParser())
app.use(cors())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true, 
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/auth', authRoutes)
app.use('/query', queryRoutes)



async function mongoConnect() {
    await connectToDb(databaseName)
        .then((result) => {
            console.log(result)
            app.listen(PORT, () => {
                console.log('Server started on port ' + 'http://localhost:' + PORT);
            });
        })
}

mongoConnect();  
